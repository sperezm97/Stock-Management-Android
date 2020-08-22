import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreenNavigationProp } from '../types';
import { Theme } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  handleEditing: Function;
}

const Header = ({ handleEditing }: Props) => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#104BD6', '#186DE5']}
        style={{
          width: '100%',
          height: 70,
          // position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          shadowColor: '#111',
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 2,
            height: 3,
          },
          paddingTop: 15,
        }}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            style={{ alignSelf: 'flex-start' }}
            size={28}
            color={Theme.colors.light.background}
            name="arrow-back"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'segoe-ui-bold',
            color: Theme.colors.light.background,
          }}>
          Detalles
        </Text>
        <TouchableOpacity onPress={() => handleEditing()}>
          <MaterialIcons
            size={28}
            color={Theme.colors.light.background}
            name="edit"
          />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    transform: [{ translateY: -90 }],
  },
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
