import React from 'react';
import { View, Text } from 'react-native';
import { Theme } from '../constants';

interface Props {}

function CategoriesScreen(props: Props) {
  return (
    <View>
      <Text style={{ color: Theme.colors.primary }}>category</Text>
    </View>
  );
}

export default CategoriesScreen;
