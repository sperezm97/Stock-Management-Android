import React, { useState, useEffect } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { Product } from '../../../state/types/product.type';
import { ProductServices } from '../../../services/productService';
import Header from '../../../components/Header';
import PhotoContainer from './PhotoContainer';
import { CategoryServices } from '../../../services/categoryService';
import { Category } from '../../../state/types/category.type';
import WithLoading from '../../../hooks/hoc/WithLoader';
import ProductCard from './ProductCard';
import styles from './styles';
import { images } from '../../../constants';
import { useRoute } from '@react-navigation/native';
import { ProductDetailsScreenRouteProp } from '../../../types';

function ProductDetailsScreen() {
  const [product, setProduct] = useState<Product>({
    sku: '',
    categoryId: 0,
    name: '',
    description: '',
    photoUri: '',
    quantity: 0,
    sellingPrice: 0,
    alertQuantity: 0,
    units: 0,
  });
  const [category, setCategory] = useState<Category>({
    id: 0,
    name: '',
    description: '',
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  // route
  const route = useRoute<ProductDetailsScreenRouteProp>();
  useEffect(() => {
    const sku = route.params.sku;
    fetchProduct(sku);
  }, []);
  const fetchProduct = async (sku: string) => {
    setLoading(true);
    try {
      const newProduct = await ProductServices.getProduct(sku);
      setProduct(newProduct);

      const { data: newCategory } = await CategoryServices.getCategory(
        newProduct.categoryId,
      );
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditing = () => {
    const updateEdit = (prev: boolean) => !prev;
    setEditing(updateEdit);
    console.log(product.photoUri);
  };

  function onSubmit(editProduct: Product) {
    console.clear();
    console.log(editProduct);
  }

  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.header}>
        <Header handleEditing={handleEditing} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WithLoading isLoading={loading}>
          <View style={styles.container}>
            <ImageBackground source={images.headerShape} style={styles.image} />
            <View style={{ top: 90, alignItems: 'center', width: '80%' }}>
              <View style={styles.photoContainer}>
                <PhotoContainer uri={product.photoUri} />
              </View>
              <ProductCard
                defaultValue={{ product, category }}
                onSubmit={onSubmit}
                isEditable={editing}
              />
            </View>
          </View>
        </WithLoading>
      </ScrollView>
    </View>
  );
}

export default ProductDetailsScreen;
