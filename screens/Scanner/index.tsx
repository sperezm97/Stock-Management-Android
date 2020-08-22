import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { ProductDetailsScreenNavigationProp } from '../../types';

interface PropStyles {
  container: ViewStyle;
  image: ImageStyle;
  imageContainer: ImageStyle;
  button: ViewStyle;
}
const styles = StyleSheet.create<PropStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  imageContainer: {
    width: '100%',
    height: 500,
  },
  button: {
    width: 350,
    height: 350,
    borderRadius: 100,
    position: 'absolute',
    paddingTop: 30,
  },
});

function ScannerScreen() {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

  const handleScan = () => navigation.navigate('CameraScreen');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.scannerBgShape}
        style={styles.imageContainer}
      />
      <TouchableOpacity onPress={handleScan} style={styles.button}>
        <Image source={images.scannerBtn} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

export default ScannerScreen;
