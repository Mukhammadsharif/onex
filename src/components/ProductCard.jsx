import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS} from '../utils/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {GlobalContext} from '../contexts/GlobalContext';

export default function ProductCard({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const addToCart = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }

    await setAdded(true);
    await setRefresh(!refresh);
  };

  const removeFromCart = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(item => item.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }

    await setAdded(false);
    await setRefresh(!refresh);
  };

  const defineProduct = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        removeFromCart(product);
      } else {
        addToCart(product);
      }
    } else {
      addToCart(product);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, {opacity: added ? 0.4 : 1}]}
      onPress={() => defineProduct(item)}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.productCardBackground,
    width: '45%',
    height: 200,
    borderRadius: 20,
    marginTop: 15,
    flexDirection: 'column',
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 100,
    borderRadius: 12,
  },
  name: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  time: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    opacity: 0.7,
  },
});
