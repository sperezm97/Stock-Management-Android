import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Theme } from '../constants/';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/Scanner/ScannerScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  ScannerScreenParamList,
  ProductsParamList,
  CategoriesParamList,
  AddProductParamList,
  RootStackParamList,
  NavigationProps,
  ProductsScreenNavigationProp,
  StackProps,
  ProductsScreenRouteProp,
  ProductDetailsScreenRouteProp,
  RootBottomTabNavigationProp,
} from '../types';
import ProductDetailsScreen from '../screens/Product/Details';
import ProductsListScreen from '../screens/Product/ProductsList';
import CategoriesScreen from '../screens/CategoriesScreen';
import AddProductScreen from '../screens/Product/AddProduct';
import { View } from '../components/Themed';
import { Button } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import AddButton from '../components/AddButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductsListNavigator from './ProductsListNavigator';
import ScannerScreen from '../screens/Scanner/ScannerScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
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
        component={TabOneNavigator}
        name="TabOne"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book" color={color} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        component={AddProductNavigator}
        name="AddProduct"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ bottom: 5, borderRadius: 36 }}>
              <TabBarIcon name="add-circle" color={color} size={50} />
            </View>
          ),
          tabBarLabel: () => <View style={{ position: 'absolute' }}></View>,
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
      <BottomTab.Screen name="Categories" component={CategoriesNavigator} />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: 'Details',
          headerTitleStyle: {
            fontSize: Theme.fonts.h1.fontSize,
            color: Theme.colors.gray,
            fontFamily: 'segoe-ui-bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </TabOneStack.Navigator>
  );
}

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
      />
    </CategoriesStack.Navigator>
  );
}

const AddProductStack = createStackNavigator<AddProductParamList>();
function AddProductNavigator() {
  return (
    <AddProductStack.Navigator>
      <AddProductStack.Screen name="AddProduct" component={AddProductScreen} />
    </AddProductStack.Navigator>
  );
}
