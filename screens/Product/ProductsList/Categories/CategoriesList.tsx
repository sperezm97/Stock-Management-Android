import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../../../state/types/category.type';
import CategoryItem from './CategoryItem';

interface Props {
  categories: Category[];
  setProductsByCategory: (id: number) => Promise<void>;
}
function CategoriesList(props: Props) {
  const { categories, setProductsByCategory } = props;
  const [selectedCategory, setSelectedCategory] = useState({
    id: 0,
  });
  return (
    <FlatList
      data={categories}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      extraData={selectedCategory}
      renderItem={({ item }) => (
        <CategoryItem
          {...{
            id: item.id,
            name: item.name,
            setProductsByCategory,
            setSelectedCategory,
            selectedCategory,
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ height: 40, left: 18 }}
    />
  );
}

export default CategoriesList;
