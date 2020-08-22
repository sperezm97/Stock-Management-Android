import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Theme } from '../constants/';
import useColorScheme from '../hooks/useColorScheme';
import {
  BottomTabParamList,
  ScannerScreenParamList,
  CategoriesParamList,
} from '../types';
import CategoriesScreen from '../screens/Category';
import TabBarIcon from '../components/TabBarIcon';
import ProductsListNavigator from './ProductsListNavigator';
import ScannerScreen from '../screens/Scanner/ScannerScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Products"
      tabBarOptions={{
        activeTintColor: Theme.colors[colorScheme].tint,
        allowFontScaling: true,
        labelStyle: {
          fontSize: 13,
          marginBottom: 8,
        },
        style: {
          padding: 5,
          height: 60,
        },
      }}>
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
        component={TabTwoNavigator}
        options={{
          // tabBarButton: () => <AddButton />,
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabTwoStack = createStackNavigator<ScannerScreenParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerTitle: 'Escaner',
          headerTitleStyle: {
            fontSize: Theme.fonts.h2.fontSize,
            color: Theme.colors.gray,
            fontFamily: 'segoe-ui-bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const CategoriesStack = createStackNavigator<CategoriesParamList>();
function CategoriesNavigator() {
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
