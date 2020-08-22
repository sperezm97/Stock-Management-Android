import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Category } from '../../state/types/category.type';
import { FlatList } from 'react-native-gesture-handler';
import { Block } from '../../components';

interface Props {
  categories: Category[];
  onPress: (id: number) => void;
}
export default function CategoriesList(props: Props) {
  const { categories, onPress } = props;
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <Block
          {...{
            title: item.name,
            description: item.description,
            onPress,
            id: item.id,
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ width: Dimensions.get('screen').width }}
    />
  );
}
