import React from 'react';
import {
  Image,
  Linking,
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
import {MainLogo} from '../components/Svgs';

export default function Broadcast() {
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

      <Text style={styles.title}>Broadcasts</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.imageText}>IPL</Text>

          <View style={styles.cardTextContainer}>
            <Text style={styles.name}>Kolkata Knight Raiders</Text>
            <Text style={styles.subName}>Royal Challengers</Text>
          </View>

          <Text style={[{height: '60%'}, styles.name]}>14.07</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.imageText}>NHL</Text>

          <View style={styles.cardTextContainer}>
            <Text style={styles.name}>Philadelphia Flyers</Text>
            <Text style={styles.subName}>Pittsburgh Penguins</Text>
          </View>

          <Text style={[{height: '60%'}, styles.name]}>29.07</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.imageText}>NBA</Text>

          <View style={styles.cardTextContainer}>
            <Text style={styles.name}>Golden State Warriors</Text>
            <Text style={styles.subName}>Minnesota Timberwolves</Text>
          </View>

          <Text style={[{height: '60%'}, styles.name]}>30.07</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.imageTextSmall}>Super League</Text>

          <View style={styles.cardTextContainer}>
            <Text style={styles.name}>Barcelona</Text>
            <Text style={styles.subName}>Manchester United</Text>
          </View>

          <Text style={[{height: '60%'}, styles.name]}>31.07</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <MainLogo width={600} height={400} />
        </View>
      </ScrollView>

      <Button
        text={'Go to main'}
        onPress={() => navigation.navigate('Products')}
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
  card: {
    height: 80,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    color: COLORS.white,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  typeText: {
    color: COLORS.mainBackground,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'italic',
  },
  imageText: {
    fontFamily: 'Montserrat-BoldItalic',
    fontStyle: 'italic',
    fontWeight: '900',
    fontSize: 40,
    color: COLORS.mainBackground,
    width: '30%',
  },
  imageTextSmall: {
    fontFamily: 'Montserrat-BoldItalic',
    fontStyle: 'italic',
    fontWeight: '900',
    fontSize: 20,
    color: COLORS.mainBackground,
    width: '30%',
    textAlign: 'center',
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '60%',
    width: '55%',
  },
  name: {
    fontFamily: 'Montserrat-Light',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
  subName: {
    fontFamily: 'Montserrat-Light',
  },
});
