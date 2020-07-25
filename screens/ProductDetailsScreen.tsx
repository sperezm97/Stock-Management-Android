import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Block } from "../components";
import { Product } from "../state/types/product.type";
import { ProductServices } from "../services/productService";
import { Theme } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";

interface Props {}

function ProductDetailsScreen() {
  const [product, setproduct] = useState<Product>({
    sku: "",
    categoryId: 0,
    name: "",
    description: "",
    photoUrl: "",
    alertQuantity: 0,
    sellingPrice: 0,
    marginProfitability: 0,
    units: 0,
  });
  useEffect(() => {
    const fetchProduct = async () => {
      const newProduct = await ProductServices.getProduct("IS000001");
      setproduct(newProduct);
    };
    fetchProduct();
  }, []);
  return (
    // <ScrollView style={{ height: "100%" }}>
    <View style={styles.container}>
      <Header />
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "segoe-ui-bold",
            color: Theme.colors.dark.background,
          }}
        >
          {product.name}
        </Text>
        <Block title="Codigo de barra" description={product.sku}></Block>
        <Block title="Descripcion" description={product.description} />
      </View>
    </View>
    // </ScrollView>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    position: "absolute",
  },
});
