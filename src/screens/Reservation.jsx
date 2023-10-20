import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../utils/colors';
import BackImage from '../assets/Back.png';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';

export default function Reservation() {
  const navigation = useNavigation();
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

      <Text style={styles.title}>Table reservation</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.white}
          placeholder={'Enter your First name'}
          mode={'outlined'}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.white}
          placeholder={'Enter your Last name'}
          mode={'outlined'}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.white}
          placeholder={'Enter your Mobile number'}
          mode={'outlined'}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.white}
          placeholder={'Enter your Table number'}
          mode={'outlined'}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />
      </ScrollView>

      <Button
        text={'Reserve'}
        onPress={() => navigation.navigate('ReservateThank')}
      />
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
    textAlign: 'left',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 15,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    backgroundColor: COLORS.productCardBackground,
    borderRadius: 10,
    color: COLORS.white,
    marginTop: 15,
  },
});
