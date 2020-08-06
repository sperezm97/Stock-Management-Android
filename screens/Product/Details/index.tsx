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

interface Props {}

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
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const newProduct = await ProductServices.getProduct('IS000002');
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
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleEditing = () => {
    const updateEdit = (prev: boolean) => !prev;
    setEditing(updateEdit);
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        <WithLoading isLoading={loading}>
          <View style={styles.container}>
            <ImageBackground source={images.headerShape} style={styles.image} />
            <View style={{ top: '15%', alignItems: 'center' }}>
              <View style={styles.photoContainer}>
                <PhotoContainer />
              </View>
              <ProductCard
                defaultValue={{ product, category }}
                onSubmit={onSubmit}
                isEditable={editing}
              />
              {/* {
                <View
                  style={{ paddingVertical: 190, backgroundColor: 'black' }}
                />
              } */}
            </View>
          </View>
        </WithLoading>
      </ScrollView>
    </View>
  );
}

export default ProductDetailsScreen;
