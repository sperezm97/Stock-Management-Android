import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Product } from '../../../state/types/product.type';
import ItemCard from './ItemCard';

interface Props {
  products: Product[];
}
function ItemsList({ products }: Props) {
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <ItemCard
          sku={item.sku}
          name={item.name}
          uri={item.photoUri}
          quantity={item.quantity}
        />
      )}
      keyExtractor={(item) => item.sku}
    />
  );
}

export default ItemsList;
