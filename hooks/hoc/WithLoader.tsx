import React from "react";
import { View, Spinner } from "native-base";
import { Theme } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
type Props = {};
const WithLoading = () => {
  return (
    <View style={styles.container}>
      <Spinner color={Theme.colors.primary} />
    </View>
  );
};

export default WithLoading;
