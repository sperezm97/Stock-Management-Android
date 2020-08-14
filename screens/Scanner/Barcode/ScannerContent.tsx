import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

export default function ScannerContent() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>SCAN</Text> */}
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.line2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  lineContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 200,
    borderWidth: 1,
    borderColor: Theme.colors.white,
  },
  line2: {
    width: 200,
    borderWidth: 1,
    borderColor: Theme.colors.white,
    position: 'absolute',
  },
  text: {
    fontSize: Theme.fonts.h1.fontSize,
    fontFamily: 'segoe-ui-semi',
    color: Theme.colors.white,
  },
});
