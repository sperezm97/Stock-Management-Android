import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CameraScreenParamList } from '../types';
import BarCode from '../screens/Scanner/Barcode';
import CameraHeader from '../components/CameraHeader';

const CameraScreenStack = createStackNavigator<CameraScreenParamList>();

export default function CameraNavigator() {
  return (
    <CameraScreenStack.Navigator>
      <CameraScreenStack.Screen
        name="CameraScreen"
        component={BarCode}
        options={{
          header: () => <CameraHeader />,
        }}
      />
    </CameraScreenStack.Navigator>
  );
}