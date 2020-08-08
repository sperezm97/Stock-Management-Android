import React from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../../state/types/category.type';
import CategoryItem from './CategoryItem';

interface Props {
  categories: Category[];
}
function CategoriesList(props: Props) {
  const { categories } = props;
  return (
    <FlatList
      data={categories}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item }) => (
        <CategoryItem {...{ id: item.id, name: item.name }} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ height: 40 }}
    />
  );
}

export default CategoriesList;
