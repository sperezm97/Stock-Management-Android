import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBarIcon from '../../../components/TabBarIcon';
import { TextInput } from 'react-native-gesture-handler';
import { validateYupSchema } from 'formik';

interface Props {
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  newProducts: (name: string) => void;
}
function SearchBox({ setValueInput, valueInput, newProducts }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', marginRight: 10 }}>
        <TabBarIcon name="search" color="#919191" size={18} />
      </View>
      <TextInput
        onChangeText={setValueInput}
        blurOnSubmit
        placeholder="Busca tus productos"
        onSubmitEditing={() => newProducts(valueInput)}
        value={valueInput}
        style={styles.input}
      />
    </View>
  );
}

export default SearchBox;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  container: {
    width: '90%',
    flexDirection: 'row',
    padding: 10,
    height: 42,
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
    justifyContent: 'center',
    marginVertical: 10,
  },
});
