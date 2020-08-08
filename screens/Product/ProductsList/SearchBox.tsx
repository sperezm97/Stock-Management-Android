import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBarIcon from '../../../components/TabBarIcon';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  newProducts: (name: string) => void;
}
function SearchBox({ setValueInput, valueInput, newProducts }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TabBarIcon name="search" color="#919191" size={18} />
        <TextInput
          onChangeText={setValueInput}
          blurOnSubmit
          placeholder="Busca tus productos"
          onChange={() => newProducts(valueInput)}
          value={valueInput}
        />
      </View>
    </View>
  );
}

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
    shadowColor: '#919191',
    shadowOpacity: 0.16,
    borderRadius: 8,
    padding: 16,
    width: '90%',
    marginVertical: 10,
  },
});
