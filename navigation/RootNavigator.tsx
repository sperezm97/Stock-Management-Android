import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import CameraNavigator from './CameraNavigator';
import AddProductNavigator from './AddProductNavigator';
import ProductDetailsScreen from '../screens/Product/Details';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        initialParams={{ sku: '' }}
      />
      <Stack.Screen name="CameraScreen" component={CameraNavigator} />
      <Stack.Screen component={AddProductNavigator} name="AddProductScreen" />
    </Stack.Navigator>
  );
}
