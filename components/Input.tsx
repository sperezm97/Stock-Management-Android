import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TextInput,
} from 'react-native';
import { Theme } from '../constants';

interface Props extends TextInputProps {
  label: string;
  selectedField: { label: string };
  setSelectedField: React.Dispatch<
    React.SetStateAction<{
      label: string;
    }>
  >;
}

interface Styles {
  container: ViewStyle;
  input: TextStyle;
  selectedInput: TextStyle;
  label: TextStyle;
}

export default function Input(props: Props): React.ReactElement {
  const { label, selectedField, setSelectedField, ...rest } = props;
  const handleSelectedField = (label: string) => {
    setSelectedField({ label: label });
    console.log(selectedField);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={true}
        {...rest}
        style={
          label === selectedField.label ? styles.selectedInput : styles.input
        }
        onFocus={() => handleSelectedField(label)}
      />
    </View>
  );
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginVertical: 5,
  },
  input: {
    height: 45,
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
    marginTop: -10,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  label: {
    fontSize: Theme.fonts.body.fontSize,
    fontFamily: 'segoe-ui-semi',
    color: '#111111',
    opacity: 0.7,
    marginTop: 10,
  },
  selectedInput: {
    height: 45,
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
    marginTop: -10,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.primary,
  },
});
