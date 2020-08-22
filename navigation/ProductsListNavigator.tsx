import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsParamList } from '../types';
import ProductsListScreen from '../screens/Product/ProductsList';
import ProductDetailsScreen from '../screens/Product/Details';

const ProductsListStack = createStackNavigator<ProductsParamList>();
// { navigation, route }: any
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
      {/* <ProductsListStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ sku: '' }}
      /> */}
    </ProductsListStack.Navigator>
  );
}

export default ProductsListNavigator;
