import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, CameraScreenParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProductDetailsScreen from '../screens/Product/Details';
import BarCode from '../screens/Scanner/Barcode';
import { Theme } from '../constants';
import CameraHeader from '../components/CameraHeader';

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
