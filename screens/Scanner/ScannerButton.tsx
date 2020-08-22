import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import { images } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BarCode from './Barcode';

interface PropStyles {
  container: ViewStyle;
  image: ImageStyle;
  imageContainer: ImageStyle;
}

function ScannerButton() {
  const handleScan = () => {
    <BarCode />;
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.scannerBgShape}
        style={styles.imageContainer}
      />
      <TouchableOpacity onPress={() => handleScan}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image source={images.scannerBtn} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScannerButton;

const styles = StyleSheet.create<PropStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 223,
    height: 223,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  imageContainer: {
    width: '100%',
    height: 500,
    transform: [{ translateX: -100 }],
  },
});
