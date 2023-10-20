import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/colors';

export default function Button({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.mainBackground,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
