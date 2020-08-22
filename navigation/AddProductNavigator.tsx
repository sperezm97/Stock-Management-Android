import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddProductParamList } from '../types';
import { Theme } from '../constants';
import AddProductScreen from '../screens/Product/AddProduct';

const AddProductStack = createStackNavigator<AddProductParamList>();
export default function AddProductNavigator() {
  return (
    <AddProductStack.Navigator>
      <AddProductStack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          headerTitle: 'Agrega un Producto',
          headerTitleStyle: {
            fontSize: Theme.fonts.h2.fontSize,
            color: Theme.colors.gray,
            fontFamily: 'segoe-ui-bold',
          },
        }}
      />
    </AddProductStack.Navigator>
  );
}
