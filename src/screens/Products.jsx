import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import ProductCard from '../components/ProductCard';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/Button';

const data = [
  {
    name: 'Maxi Box',
    time: '15 min',
    price: '20',
    image: require('../assets/products/maxi-box.webp'),
    count: 1,
  },
  {
    name: 'Maxi Box Famous',
    time: '16 min',
    price: '26',
    image: require('../assets/products/maxi-box-famous.webp'),
    count: 1,
  },
  {
    name: 'Maxi Box Panini',
    time: '10 min',
    price: '15',
    image: require('../assets/products/maxi-box-panini.webp'),
    count: 1,
  },
  {
    name: 'Maxi Box Retro',
    time: '15 min',
    price: '20',
    image: require('../assets/products/maxi-box-retro.webp'),
    count: 1,
  },
  {
    name: 'Maxi Box Traditional',
    time: '15 min',
    price: '20',
    image: require('../assets/products/maxi-box-tradional.webp'),
    count: 1,
  },
  {
    name: 'Maxi Box Trend',
    time: '15 min',
    price: '20',
    image: require('../assets/products/maxi-box-trend.webp'),
    count: 1,
  },
  {
    name: 'Big Burger',
    time: '20 min',
    price: '30',
    image: require('../assets/products/bigburger.webp'),
    count: 1,
  },
  {
    name: 'Box',
    time: '20 min',
    price: '19',
    image: require('../assets/products/box.webp'),
    count: 1,
  },
  {
    name: 'Cheese Dog',
    time: '15 min',
    price: '18',
    image: require('../assets/products/cheese-dog.webp'),
    count: 1,
  },
  {
    name: 'Cheese Burger',
    time: '15 min',
    price: '25',
    image: require('../assets/products/cheeseburger.webp'),
    count: 1,
  },
  {
    name: 'Club Sandwich',
    time: '10 min',
    price: '22',
    image: require('../assets/products/club-sandwich.webp'),
    count: 1,
  },
  {
    name: 'Donar Box',
    time: '10 min',
    price: '28',
    image: require('../assets/products/donar-box.webp'),
    count: 1,
  },
  {
    name: 'Donar Kebab',
    time: '15 min',
    price: '18',
    image: require('../assets/products/donar-kebab.webp'),
    count: 1,
  },
  {
    name: 'Hamburger',
    time: '20 min',
    price: '25',
    image: require('../assets/products/hamburger.webp'),
    count: 1,
  },
  {
    name: 'Hot Dog',
    time: '5 min',
    price: '8',
    image: require('../assets/products/hot-dog.webp'),
    count: 1,
  },
  {
    name: 'King Doc',
    time: '8 min',
    price: '10',
    image: require('../assets/products/king-doc.webp'),
    count: 1,
  },
  {
    name: 'Lavash',
    time: '15 min',
    price: '20',
    image: require('../assets/products/lavash.webp'),
    count: 1,
  },
  {
    name: 'Lavash mini',
    time: '15 min',
    price: '15',
    image: require('../assets/products/lavash-min.webp'),
    count: 1,
  },
  {
    name: 'Longer',
    time: '10 min',
    price: '10',
    image: require('../assets/products/longer.webp'),
    count: 1,
  },
  {
    name: 'Panini',
    time: '10 min',
    price: '12',
    image: require('../assets/products/panini.webp'),
    count: 1,
  },
  {
    name: 'Sandwich',
    time: '10 min',
    price: '10',
    image: require('../assets/products/sandwich-original.webp'),
    count: 1,
  },
  {
    name: 'Shaurma',
    time: '10 min',
    price: '12',
    image: require('../assets/products/shaurma.webp'),
    count: 1,
  },
  {
    name: 'Strips',
    time: '15 min',
    price: '11',
    image: require('../assets/products/strips.webp'),
    count: 1,
  },
  {
    name: 'Naggets',
    time: '15 min',
    price: '11',
    image: require('../assets/products/naggests.webp'),
    count: 1,
  },
  {
    name: 'Xalapeno',
    time: '0 min',
    price: '5',
    image: require('../assets/products/xalapeno.webp'),
    count: 1,
  },
  {
    name: 'Ris',
    time: '5 min',
    price: '5',
    image: require('../assets/products/ris.webp'),
    count: 1,
  },
  {
    name: 'Over',
    time: '5 min',
    price: '5',
    image: require('../assets/products/salat.webp'),
    count: 1,
  },
  {
    name: 'Americano',
    time: '5 min',
    price: '10',
    image: require('../assets/products/americano.webp'),
    count: 1,
  },
  {
    name: 'Caputino',
    time: '5 min',
    price: '10',
    image: require('../assets/products/caputino.webp'),
    count: 1,
  },
  {
    name: 'Latte',
    time: '5 min',
    price: '10',
    image: require('../assets/products/latte.webp'),
    count: 1,
  },
  {
    name: 'Bonaqua',
    time: '0 min',
    price: '2',
    image: require('../assets/products/bonaqua.webp'),
    count: 1,
  },
  {
    name: 'Coca cola',
    time: '0 min',
    price: '3',
    image: require('../assets/products/coca-cola.webp'),
    count: 1,
  },
  {
    name: 'Coca Cola Bottle',
    time: '0 min',
    price: '4',
    image: require('../assets/products/coca-cola-bottle.webp'),
    count: 1,
  },
  {
    name: 'Fanta',
    time: '0 min',
    price: '4',
    image: require('../assets/products/fanta.webp'),
    count: 1,
  },
  {
    name: 'Dark Tea',
    time: '2 min',
    price: '2',
    image: require('../assets/products/dark-tea.webp'),
    count: 1,
  },
  {
    name: 'Fuse Tea',
    time: '0 min',
    price: '4',
    image: require('../assets/products/fuse-tea.webp'),
    count: 1,
  },
  {
    name: 'Limon Tea',
    time: '2 min',
    price: '5',
    image: require('../assets/products/limon-tea.webp'),
    count: 1,
  },
  {
    name: 'Bread',
    time: '0 min',
    price: '1',
    image: require('../assets/products/bread.webp'),
    count: 1,
  },
  {
    name: 'Mayonese',
    time: '0 min',
    price: '2',
    image: require('../assets/products/mayonez.webp'),
    count: 1,
  },
  {
    name: 'Onion souse',
    time: '0 min',
    price: '2',
    image: require('../assets/products/onion-souse.webp'),
    count: 1,
  },
];

export default function Products() {
  const navigation = useNavigation();

  useEffect(() => {
    const setProductList = async () => {
      await AsyncStorage.setItem('productsList', JSON.stringify(data));
    };

    setProductList();
  }, []);

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
      </View>

      <Text style={styles.title}>Your Favorite Food</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </ScrollView>

      <Button text={'Go to cart'} onPress={() => navigation.navigate('Cart')} />
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
});
