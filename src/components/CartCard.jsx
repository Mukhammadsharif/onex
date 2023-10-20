import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/colors';
import TrashIcon from '../assets/trash.png';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-community/async-storage';

export default function CartCard({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const addNumber = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === item.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const minusNumber = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === item.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteFromCart = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== item.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '70%', flexDirection: 'row'}}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}$</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => deleteFromCart()}>
          <Image source={TrashIcon} style={styles.trash} />
        </TouchableOpacity>

        <View style={styles.sumContainer}>
          <TouchableOpacity style={styles.minus} onPress={() => minusNumber()}>
            <Text style={styles.minusText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.count}>{item.count}</Text>

          <TouchableOpacity style={styles.plus} onPress={() => addNumber()}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    borderRadius: 15,
    backgroundColor: COLORS.productCardBackground,
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
  },
  image: {
    width: '30%',
    height: 70,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '30%',
  },
  trash: {
    width: 20,
    height: 20,
  },
  sumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minus: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.mainBackground,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  plus: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: COLORS.mainBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  count: {
    marginHorizontal: 10,
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  price: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  name: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    opacity: 0.7,
  },
});
