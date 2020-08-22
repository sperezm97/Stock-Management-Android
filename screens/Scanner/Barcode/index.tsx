import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import {
  BarCodeScanner,
  BarCodeScannedCallback,
  BarCodeEventCallbackArguments,
  BarCodeEvent,
} from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { ProductDetailsScreenNavigationProp } from '../../../types';
import ScannerContent from './ScannerContent';
import { Theme } from '../../../constants';

interface BarCodeProps {
  type: BarCodeScanner;
  data: string;
}
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
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('ProductDetailsScreen', { sku: data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}>
        <ScannerContent />

        {scanned && (
          <View style={{ padding: 10, top: 50 }}>
            <Button
              color={Theme.colors.primary}
              title={'Presiona para escanear de nuevo'}
              onPress={() => setScanned(false)}
            />
          </View>
        )}
      </View>
    </View>
  );
}
