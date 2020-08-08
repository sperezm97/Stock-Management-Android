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
}

interface Styles {
  container: ViewStyle;
  input: TextStyle;
  label: TextStyle;
}

export default function Input(props: Props): React.ReactElement {
  const { label, ...rest } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput multiline={true} {...rest} style={styles.input} />
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
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.primary,
  },
  label: {
    fontSize: Theme.fonts.body.fontSize,
    fontFamily: 'segoe-ui-semi',
    color: '#111111',
    opacity: 0.7,
    marginTop: 10,
  },
});
