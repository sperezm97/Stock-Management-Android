import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ProductForm from './ProductForm';
import { Category } from '../../../state/types/category.type';
import { CategoryServices } from '../../../services/categoryService';
import { Product } from '../../../state/types/product.type';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ProductServices } from '../../../services/productService';

export default function index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      setLoading(true);
      const { data: newCategory } = await CategoryServices.getCategories();
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const formatProduct = (
    productData: Product,
    selectedCategory: number | string,
  ) => {
    productData.quantity = parseInt(productData.quantity.toString());
    if (typeof productData.alertQuantity === 'undefined') {
      productData.alertQuantity = 0;
    }
    productData.alertQuantity = parseInt(productData.alertQuantity.toString());
    productData.units = parseInt(productData.units.toString());
    if (typeof selectedCategory === 'number') {
      productData.categoryId = selectedCategory;
    }
    return productData;
  };
  const onsubmit = async (
    productData: Product,
    selectedCategory: number | string,
    photoUri: string,
  ) => {
    const newProduct = formatProduct(productData, selectedCategory);
    await ProductServices.addProduct(newProduct, photoUri);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductForm
          onSubmit={onsubmit}
          defaultValue={{ categories: categories }}
        />
      </ScrollView>
    </View>
  );
}
