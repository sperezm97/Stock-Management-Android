import React from 'react';
import { View, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';
import { colors } from '../../constants/Theme';

interface Styles {
  container: ViewStyle;
}

interface Loader {
  isLoading: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const WithLoading = (props: Loader): JSX.Element => {
  const { isLoading, children } = props;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return <>{children}</>;
};

export default WithLoading;
