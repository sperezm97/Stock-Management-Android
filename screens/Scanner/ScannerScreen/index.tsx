import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import BarCode from '../Barcode';
import ScannerButton from '../ScannerButton';
import OtherComponent from './OtherComponent';
import { Theme } from '../../../constants';

export default function ScannerScreen() {
  return (
    <View style={styles.container}>
      <OtherComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: Theme.colors.white,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
