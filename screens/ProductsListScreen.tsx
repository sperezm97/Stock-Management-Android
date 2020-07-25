import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsScreenNavigationProp } from "../types";

interface Props {}

const ProductsListScreen = (props: Props) => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <View>
      <Text>hey</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.push("ProductDetailsScreen", { sku: "IS000002" })
        }
      >
        click me
      </Button>
    </View>
  );
};
// "Details/IS000001"
export default ProductsListScreen;
