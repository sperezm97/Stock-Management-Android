import React, { useState } from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { Theme } from '../../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  id: number;
  name: string;
  setProductsByCategory: (id: number) => Promise<void>;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<{
      id: number;
    }>
  >;
  selectedCategory: {
    id: number;
  };
}
interface Styles {
  container: ViewStyle;
  category: TextStyle;
  selectedCategory: TextStyle;
}

function CategoryItem(props: Props) {
  const {
    name,
    id,
    setProductsByCategory,
    setSelectedCategory,
    selectedCategory,
  } = props;

  const handleTouch = (id: number) => {
    setProductsByCategory(id);
    setSelectedCategory({ id: id });
  };
  return (
    <TouchableOpacity onPress={() => handleTouch(id)}>
      <View style={styles.container}>
        <Text
          style={
            id === selectedCategory.id
              ? styles.selectedCategory
              : styles.category
          }>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryItem;

const styles = StyleSheet.create<Styles>({
  container: {
    width: 110,
    maxHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginRight: 10,
    padding: 5,
  },
  category: {
    color: '#919191',
    fontSize: Theme.fonts.caption.fontSize,
  },
  selectedCategory: {
    color: Theme.colors.primary,
    fontSize: Theme.fonts.caption.fontSize,
  },
});
