import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Block } from '../components';
import { Product } from '../state/types/product.type';
import { ProductServices } from '../services/productService';
import { Theme } from '../constants';
import Header from '../components/Header';
import PhotoContainer from '../components/PhotoContainer';
import { CategoryServices } from '../services/categoryService';
import { Category } from '../state/types/category.type';
import WithLoading from '../hooks/hoc/WithLoader';
import ProductCard from '../components/ProductCard';

interface Props {}

const screenWidth = Dimensions.get('window').width;
function ProductDetailsScreen() {
  const [product, setproduct] = useState<Product>({
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
  const [category, setcategory] = useState<Category>({
    id: 0,
    name: '',
    description: '',
  });

  const [editing, setediting] = useState(false);
  const handleEditing = () => {
    setediting(!editing);
  };
  const fetchCategory = async () => {
    const newCategory = await CategoryServices.getCategory(product.categoryId);
    setcategory(newCategory);
  };
  const fetchProduct = async () => {
    const newProduct = await ProductServices.getProduct('IS000002');
    setproduct(newProduct);
  };
  const [loading, setloading] = useState<Boolean>(false);
  useEffect(() => {
    setloading(true);
    fetchProduct();
    setloading(false);
  }, []);
  useEffect(() => {
    fetchCategory();
  });
  return (
    <View style={styles.detailsWraper}>
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
  detailsWraper: {
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
