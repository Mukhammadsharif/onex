import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackgroundImage from '../assets/background1.png';
import {COLORS} from '../utils/colors';
import MainButton from '../components/MainButton';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

export default function ContactThank() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View>
          <Text style={styles.title}>THANK YOU</Text>

          <Text style={styles.subtitle}>WE WELL CALL YOU!</Text>
        </View>

        <MainButton
          text={'Go main'}
          onPress={() => navigation.navigate('Products')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '20%',
    paddingTop: '40%',
  },
  title: {
    textAlign: 'center',
    color: COLORS.mainBackground,
    fontWeight: '700',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.mainBackground,
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    marginTop: 30,
  },
  qrContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
