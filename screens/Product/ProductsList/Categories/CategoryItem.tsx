import React, { useState } from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { Theme } from '../../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  id: number;
  name: string;
  setProductsByCategory: (id: number) => Promise<void>;
}
interface Styles {
  container: ViewStyle;
  category: TextStyle;
}

function CategoryItem(props: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { name, id, setProductsByCategory } = props;
  const handleTouch = (id: number) => {
    setProductsByCategory(id);
    setIsActive(!isActive);
  };
  return (
    <TouchableOpacity onPress={() => handleTouch(id)}>
      <View style={styles.container}>
        <Text
          style={{
            color: isActive ? Theme.colors.primary : '#919191',
            fontSize: Theme.fonts.caption.fontSize,
          }}>
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
  category: {},
});
