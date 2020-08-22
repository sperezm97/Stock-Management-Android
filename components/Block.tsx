import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
  description: string | undefined;
  isEditable?: boolean;
  onPress: (id: number) => void;
  id: number;
}
interface StyleProps {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}
const Block = (props: Props) => {
  const { title, onPress, description, isEditable = false, id } = props;
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      style={{ alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Block;

const styles = StyleSheet.create<StyleProps>({
  container: {
    paddingVertical: 10,
    flexDirection: 'column',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.primary,
  },
  title: {
    fontSize: Theme.fonts.body.fontSize,
    fontFamily: 'segoe-ui-semi',
    color: '#111111',
    opacity: 0.7,
    marginTop: 10,
  },
  description: {
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
  },
});
