import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images, Theme } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {
  ProductsScreenNavigationProp,
  ProductDetailsScreenNavigationProp,
} from '../../../types';

interface Props {
  name: string;
  sku: string;
  uri?: string;
}
function ItemCard({ name, sku, uri }: Props) {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  function imageHandler() {
    if (typeof uri === 'string') {
      return <Image source={{ uri: uri }} style={styles.image} />;
    } else {
      return (
        <Image
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
          source={images.noImage}
        />
      );
    }
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetailsScreen', { sku: sku })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>{imageHandler()}</View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.caption}>{sku}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 150,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 102,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  name: {
    fontFamily: 'segoe-ui-semi',
    fontSize: 15,
    color: '#363636',
    opacity: 0.88,
  },
  caption: {
    fontSize: 13,
    color: '#707070',
    opacity: 0.77,
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: 5,
    paddingHorizontal: 10,
  },
});
