import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreenNavigationProp } from '../../../types';
import { Product } from '../../../state/types/product.type';
import { ProductServices } from '../../../services/productService';
import ItemsList from './ItemsList';
import { Theme } from '../../../constants';

interface Props {}

const ProductsListScreen = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const listOfProducts = await ProductServices.getProducts();
    setProducts(listOfProducts.data);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Theme.colors.white,
      }}>
      {/* <Text style={{ fontSize: 150 }}>hey</Text> */}
      <Button
        title="Go to details"
        onPress={() =>
          navigation.push('ProductDetailsScreen', { sku: 'IS000002' })
        }>
        click me
      </Button>
      <ItemsList products={products} />
    </View>
  );
};
// "Details/IS000001"
export default ProductsListScreen;
