import React, { useState, useEffect } from 'react';
import { Category } from '../../state/types/category.type';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreenNavigationProp } from '../../types';
import { CategoryServices } from '../../services/categoryService';
import CategoriesList from './CategoriesList';
import WithLoading from '../../hooks/hoc/WithLoader';
import { View } from '../../components/Themed';
import { Theme } from '../../constants';

function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { data: newCategories } = await CategoryServices.getCategories();
      setCategories(newCategories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onPress = (id: number) => {
    navigation.navigate('ProductsListScreen');
  };
  return (
    <WithLoading isLoading={loading}>
      <View style={{ backgroundColor: Theme.colors.white, height: '100%' }}>
        <CategoriesList categories={categories} onPress={onPress} />
      </View>
    </WithLoading>
  );
}

export default CategoriesScreen;
