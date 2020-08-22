import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsParamList } from '../types';
import ProductsListScreen from '../screens/Product/ProductsList';

const ProductsListStack = createStackNavigator<ProductsParamList>();
function ProductsListNavigator() {
  return (
    <ProductsListStack.Navigator>
      <ProductsListStack.Screen
        name="ProductsListScreen"
        component={ProductsListScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProductsListStack.Navigator>
  );
}

export default ProductsListNavigator;
