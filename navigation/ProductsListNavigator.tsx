import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsParamList } from '../types';
import ProductsListScreen from '../screens/Product/ProductsList';
import ProductDetailsScreen from '../screens/Product/Details';

const ProductsListStack = createStackNavigator<ProductsParamList>();

function ProductsListNavigator({ navigation, route }: any) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <ProductsListStack.Navigator>
      <ProductsListStack.Screen
        name="ProductsListScreen"
        component={ProductsListScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProductsListStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ sku: '' }}
      />
    </ProductsListStack.Navigator>
  );
}

export default ProductsListNavigator;
