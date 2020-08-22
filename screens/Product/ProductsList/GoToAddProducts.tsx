import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBarIcon from '../../../components/TabBarIcon';
import { Theme } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../../types';

interface Props {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Root'>;
}
export default function GoToAddProducts({ navigation }: Props) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddProductScreen')}>
      <View style={styles.addCircle}>
        <TabBarIcon name="add-circle" color={Theme.colors.primary} size={50} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addCircle: {
    top: '60%',
    right: 100,
  },
});
