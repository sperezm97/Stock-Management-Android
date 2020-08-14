import React from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../../../state/types/category.type';
import CategoryItem from './CategoryItem';

interface Props {
  categories: Category[];
  setProductsByCategory: (id: number) => Promise<void>;
}
function CategoriesList(props: Props) {
  const { categories, setProductsByCategory } = props;
  return (
    <FlatList
      data={categories}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item }) => (
        <CategoryItem
          {...{ id: item.id, name: item.name, setProductsByCategory }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ height: 40, left: 18 }}
    />
  );
}

export default CategoriesList;
