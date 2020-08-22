import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {
  RootStackParamList,
  CameraScreenParamList,
  AddProductParamList,
} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProductDetailsScreen from '../screens/Product/Details';
import BarCode from '../screens/Scanner/Barcode';
import { Theme } from '../constants';
import CameraHeader from '../components/CameraHeader';
import AddProductScreen from '../screens/Product/AddProduct';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ sku: '' }}
      />
      <Stack.Screen name="CameraScreen" component={CameraNavigator} />
      <Stack.Screen
        component={AddProductNavigator}
        name="AddProductScreen"
        options={
          {
            // tabBarIcon: ({ color }) => (
            //   <View style={{ bottom: 5, borderRadius: 36 }}>
            //     <TabBarIcon name="add-circle" color={color} size={50} />
            //   </View>
            // ),
          }
        }
      />
    </Stack.Navigator>
  );
}

const CameraScreenStack = createStackNavigator<CameraScreenParamList>();

function CameraNavigator() {
  return (
    <CameraScreenStack.Navigator>
      <CameraScreenStack.Screen
        name="CameraScreen"
        component={BarCode}
        options={{
          // headerTitle: 'Escanea para buscar',
          // headerTitleStyle: {
          //   fontSize: Theme.fonts.h2.fontSize,
          //   color: Theme.colors.white,
          //   fontFamily: 'segoe-ui-bold',
          // },
          header: () => <CameraHeader />,
        }}
      />
    </CameraScreenStack.Navigator>
  );
}

const AddProductStack = createStackNavigator<AddProductParamList>();
function AddProductNavigator() {
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
