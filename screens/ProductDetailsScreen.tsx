import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Block } from "../components";
import { Product } from "../state/types/product.type";
import { ProductServices } from "../services/productService";
import { Theme } from "../constants";
import Header from "../components/Header";
import PhotoContainer from "../components/PhotoContainer";
import { CategoryServices } from "../services/categoryService";
import { Category } from "../state/types/category.type";
import WithLoading from "../hooks/hoc/WithLoader";

interface Props {}

const screenWidth = Dimensions.get("window").width;
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
  const [category, setcategory] = useState<Category>({
    id: 0,
    name: "",
    description: "",
  });
  const fetchCategory = async () => {
    const newCategory = await CategoryServices.getCategory(product.categoryId);
    setcategory(newCategory);
  };
  const [loading, setloading] = useState<Boolean>(false);
  useEffect(() => {
    setloading(true);
    const fetchProduct = async () => {
      const newProduct = await ProductServices.getProduct("IS000001");
      setproduct(newProduct);
    };
    fetchProduct();
    fetchCategory();
    setloading(false);
  }, []);

  return (
    <View style={styles.detailsWraper}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
        </View>
        {(loading && <WithLoading />) || (
          <View style={styles.container}>
            <View style={styles.photoContainer}>
              <PhotoContainer />
            </View>
            <View style={styles.content}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "segoe-ui-bold",
                  color: Theme.colors.dark.background,
                  textAlign: "center",
                }}
              >
                {product.name}
              </Text>
              <Block title="Codigo de barra" description={product.sku} />
              <Block title="Descripcion" description={product.description} />
              <Block title="Unidades" description={product.units} />
              <Block title="Categoria" description={category.name} />
            </View>
            {/* <View style={{ paddingVertical: 190, backgroundColor: "black" }} /> */}
          </View>
        )}
      </ScrollView>
    </View>

    //{" "}
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    top: "10%",
  },
  detailsWraper: {
    backgroundColor: Theme.colors.white,
    flex: 1,
  },
  photoContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    top: "5%",
  },
  header: {
    position: "absolute",
    flex: 1,
  },
});
