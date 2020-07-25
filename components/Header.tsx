import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsScreenNavigationProp } from "../types";

interface Props {}

const Header = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Header;
