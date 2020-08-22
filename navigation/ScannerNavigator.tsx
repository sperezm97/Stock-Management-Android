import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsParamList } from '../types';
import ScannerScreen from '../screens/Scanner';

type ScannerParamList = {
  Scanner: undefined;
};

const ScannerStack = createStackNavigator<ScannerParamList>();

function ScannerNavigator() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerShown: false,
        }}
      />
    </ScannerStack.Navigator>
  );
}

export default ScannerNavigator;
