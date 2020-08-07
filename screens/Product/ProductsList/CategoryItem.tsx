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
    <TouchableOpacity onPress={() => console.log(id)}>
      <View style={styles.container}>
        <Text style={styles.category}>{name}</Text>
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
    top: 10,
  },
  category: {
    fontSize: Theme.fonts.caption.fontSize,
    color: '#919191',
  },
});
