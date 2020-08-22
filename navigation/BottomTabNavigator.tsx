import * as React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import { Theme } from '../constants/';
import { BottomTabParamList } from '../types';
import TabBarIcon from '../components/TabBarIcon';
import ProductsListNavigator from './ProductsListNavigator';
import ScannerNavigator from './ScannerNavigator';
import CategoriesNavigator from './CategoriesNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const tabBarOption: BottomTabBarOptions = {
  activeTintColor: Theme.colors.primary,
  allowFontScaling: true,
  labelStyle: {
    fontSize: 13,
    marginBottom: 8,
  },
  style: {
    padding: 5,
    height: 60,
  },
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Products"
      tabBarOptions={tabBarOption}>
      <BottomTab.Screen
        name="Products"
        component={ProductsListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="kitchen" color={color} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Scanner"
        component={ScannerNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="compare" color={color} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="label" color={color} size={18} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
