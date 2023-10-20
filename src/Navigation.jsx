import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Products from './screens/Products';
import {COLORS} from './utils/colors';
import {MainLogo} from './components/Svgs';
import CatalogImage from './assets/fi_4903482.png';
import ReservationImage from './assets/ic_outline-local-offer.png';
import BroadcastImage from './assets/ic_outline-sticky-note-2.png';
import ContactImage from './assets/whh_securityalt.png';
import Cart from './screens/Cart';
import OrderThank from './screens/OrderThank';
import ReservateThank from './screens/ReservateThank';
import Reservation from './screens/Reservation';
import Contacts from './screens/Contacts';
import ContactThank from './screens/ContactThank';
import Broadcast from './screens/Broadcast';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="OrderThank"
        component={OrderThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="ReservateThank"
        component={ReservateThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Reservation"
        component={Reservation}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="ContactThank"
        component={ContactThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Broadcast"
        component={Broadcast}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <MainLogo width={600} height={400} />
        </View>

        <View style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={styles.drawerItem}>
            <Image source={CatalogImage} style={styles.icon} />
            <Text style={styles.itemText}>Catalog</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Reservation')}
            style={styles.drawerItem}>
            <Image source={ReservationImage} style={styles.icon} />
            <Text style={styles.itemText}>Table reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Broadcast')}
            style={styles.drawerItem}>
            <Image source={BroadcastImage} style={styles.icon} />
            <Text style={styles.itemText}>Broadcasts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.drawerItem}>
            <Image source={ContactImage} style={styles.icon} />
            <Text style={styles.itemText}>Contacts</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>ONEX SPORT PUB</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 40,
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: COLORS.white,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 10,
  },
});
