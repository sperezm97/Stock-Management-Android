import React from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { Theme } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category } from '../../../state/types/category.type';

interface Props {
  id: number;
  name: string;
}
interface Styles {
  container: ViewStyle;
  category: TextStyle;
}
function CategoryItem(props: Props) {
  const { name, id } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log(id)}>
      <Text style={styles.category}>{name}</Text>
    </TouchableOpacity>
  );
}

export default CategoryItem;

const styles = StyleSheet.create<Styles>({
  container: {
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  category: {
    fontSize: Theme.fonts.caption.fontSize,
    color: '#919191',
  },
});
