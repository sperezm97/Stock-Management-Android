import React from 'react';
import { CategoriesParamList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/Category';
import { Theme } from '../constants';

const CategoriesStack = createStackNavigator<CategoriesParamList>();
export default function CategoriesNavigator() {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categorias',
          headerTitleStyle: {
            fontSize: Theme.fonts.h2.fontSize,
            color: Theme.colors.gray,
            fontFamily: 'segoe-ui-bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </CategoriesStack.Navigator>
  );
}
