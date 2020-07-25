import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";
import { Product } from "../state/types/product.type";
import { ProductServices } from "../services/productService";

export default function TabOneScreen() {
  const [products, setproduct] = useState<Product[] | undefined>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const product = await ProductServices.getProducts();
      setproduct(product);
      console.log(products);
      console.log(product);
    };
    fetchDataAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
