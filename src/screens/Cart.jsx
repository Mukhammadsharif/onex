import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import BackImage from '../assets/Back.png';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/Button';
import Vector from '../assets/Vector1.png';
import Group from '../assets/Group1.png';
import CartCard from '../components/CartCard';
import {GlobalContext} from '../contexts/GlobalContext';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh} = useContext(GlobalContext);
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCartItems(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  useEffect(() => {
    if (cartItems?.length) {
      let sum = 0;
      cartItems.forEach(product => {
        sum = sum + parseInt(product.price, 10) * product.count;
      });

      setPrice(sum);
    }
  }, [cartItems, refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.hamburger}>
          <View style={styles.hamburgerItem} />
          <View style={styles.hamburgerItem} />
          <View style={styles.hamburgerItem} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={BackImage} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Cart</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {!cartItems?.length ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>CART IS EMPTY</Text>

            <Image source={Vector} style={styles.vector} />

            <Image source={Group} style={styles.group} />
          </View>
        ) : (
          cartItems?.map((item, index) => <CartCard key={index} item={item} />)
        )}
      </ScrollView>

      {!cartItems?.length ? (
        <Button
          text={'Go to main'}
          onPress={() => navigation.navigate('Products')}
        />
      ) : (
        <View style={styles.placeOrder}>
          <View style={styles.orderTextContainer}>
            <Text style={styles.text}>Sub-Total</Text>

            <Text style={styles.text}>{price}$</Text>
          </View>

          <View style={styles.orderTextContainer}>
            <Text style={styles.text}>Delivery Charge</Text>

            <Text style={styles.text}>10$</Text>
          </View>

          <View style={styles.orderTextContainer}>
            <Text style={styles.text}>Total</Text>

            <Text style={styles.text}>{price ? price + 10 : ''}$</Text>
          </View>
          <Button
            text={'Place My Order'}
            onPress={() => {
              navigation.navigate('OrderThank');
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  hamburger: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hamburgerItem: {
    height: 3,
    width: '100%',
    backgroundColor: COLORS.mainBackground,
    borderRadius: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 15,
    marginTop: 20,
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyContainer: {
    width: '100%',
    position: 'relative',
  },
  vector: {
    width: '100%',
    height: 280,
    marginTop: '30%',
    transform: 'scale(0.8)',
  },
  group: {
    width: '100%',
    height: 350,
    position: 'absolute',
    top: '30%',
    transform: 'scale(0.5)',
  },
  placeOrder: {
    width: '100%',
  },
  orderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
});
