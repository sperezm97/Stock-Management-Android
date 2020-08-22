import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CameraScreenParamList } from '../types';
import BarCode from '../screens/Barcode';
import { Theme } from '../constants';

const CameraScreenStack = createStackNavigator<CameraScreenParamList>();

export default function CameraNavigator() {
  return (
    <CameraScreenStack.Navigator>
      <CameraScreenStack.Screen
        name="CameraScreen"
        component={BarCode}
        options={{
          headerShown: false,
        }}
      />
    </CameraScreenStack.Navigator>
  );
}
