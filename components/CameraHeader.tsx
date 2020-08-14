import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Theme } from '../constants';
import { useNavigation } from '@react-navigation/native';
import {
  RootBottomTabNavigationProp,
  ProductDetailsScreenNavigationProp,
} from '../types';

export default function CameraHeader() {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 70,
          // position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
          backgroundColor: 'black',
          opacity: 0.7,
          paddingTop: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            size={28}
            color={Theme.colors.light.background}
            name="arrow-back"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'segoe-ui-bold',
            color: Theme.colors.light.background,
          }}>
          Escanea tu codigo
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
