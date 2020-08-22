import React, { Children } from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { Theme } from '../../constants';

interface Header {
  left?: JSX.Element;
  children?: JSX.Element;
  right?: JSX.Element;
}

interface Styles {
  container: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  body: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Theme.colors.dark.background,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flexGrow: 3,
  },
  text: {
    ...Theme.fonts.h2,
    textAlign: 'center',
  },
});

function HeaderBarcode(props: Header): JSX.Element {
  const { left, children, right } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.body}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.right}>{right}</View>
    </View>
  );
}
HeaderBarcode.defaultsProps = {
  left: <View />,
  children: <View />,
  right: <View />,
};
export default HeaderBarcode;
