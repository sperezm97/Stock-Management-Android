import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  ViewStyle,
} from 'react-native';
import { BarCodeScanner, BarCodeEvent } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { ProductDetailsScreenNavigationProp } from '../../types';
import { Theme } from '../../constants';
import HeaderBarcode from './HeaderBarcode';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Styles {
  container: ViewStyle;
  scanner: ViewStyle;
  content: ViewStyle;
  box: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  scanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  box: {
    height: height * 0.45,
    width: width * 0.7,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
});

export default function BarCode() {
  const [hasPermission, setHasPermission] = useState<boolean | undefined>(
    undefined,
  );
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    return () => {
      setScanned(false);
    };
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    setScanned(true);
    if (scanned) {
      navigation.navigate('ProductDetailsScreen', { sku: data });
    }
  };

  function back() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <HeaderBarcode
        left={
          <TouchableOpacity onPress={back}>
            <MaterialIcons
              size={28}
              color={Theme.colors.light.background}
              name="arrow-back"
            />
          </TouchableOpacity>
        }>
        Prueba
      </HeaderBarcode>
      <View style={styles.content}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}>
          <View style={styles.box} />
        </BarCodeScanner>
      </View>
    </View>
  );
}
