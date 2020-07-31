import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Product } from '../state/types/product.type';
import { ProductServices } from '../services/productService';
import { Theme } from '../constants';
import Header from '../components/Header';
import PhotoContainer from '../components/PhotoContainer';
import { CategoryServices } from '../services/categoryService';
import { Category } from '../state/types/category.type';
import ProductCard from '../components/ProductCard';

const screenWidth = Dimensions.get('window').width;
function ProductDetailsScreen() {
  const [product, setProduct] = useState<Product>({
    sku: '',
    categoryId: 0,
    name: '',
    description: '',
    photoUrl: '',
    alertQuantity: 0,
    sellingPrice: 0,
    marginProfitability: 0,
    units: 0,
  });
  const [category, setCategory] = useState<Category>({
    id: 0,
    name: '',
    description: '',
  });

  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(!editing);
  };
  const fetchCategory = async () => {
    const newCategory = await CategoryServices.getCategory(product.categoryId);
    setCategory(newCategory);
  };
  const fetchProduct = async () => {
    const newProduct = await ProductServices.getProduct('IS000002');
    setProduct(newProduct);
  };
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchProduct();
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchCategory();
  });
  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.header}>
        <Header handleEditing={handleEditing} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        {(loading && (
          <View>
            <Text>loading...</Text>
          </View>
        )) || (
          <View style={styles.container}>
            <ImageBackground
              source={require('../assets/images/header-shape.png')}
              style={styles.image}
            />
            <View style={{ top: '15%', alignItems: 'center' }}>
              <View style={styles.photoContainer}>
                <PhotoContainer />
              </View>
              <ProductCard
                product={product}
                category={category}
                isEditable={editing}
              />
              {/* {
                <View
                  style={{ paddingVertical: 190, backgroundColor: 'black' }}
                />
              } */}
            </View>
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
    alignItems: 'center',
  },
  detailsWrapper: {
    backgroundColor: Theme.colors.white,
    flex: 1,
    width: screenWidth,
  },
  photoContainer: { zIndex: 0 },
  header: {
    zIndex: 1,
  },
  image: {
    height: 500,
    width: '100%',
    transform: [{ translateY: -90 }],
    position: 'absolute',
    zIndex: 0,
  },
});
