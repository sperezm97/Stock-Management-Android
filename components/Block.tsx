import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../constants";
import { TextInput } from "react-native-gesture-handler";

interface Props {
  title: string;
  description: string | undefined;
  isEditable?: boolean;
}

const Block = ({ title, description, isEditable = false }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput editable={isEditable} style={styles.description}>
        {description}
      </TextInput>
      <View style={styles.line} />
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  line: {
    width: 314.67,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.primary,
    marginTop: 2,
  },
  title: {
    fontSize: Theme.fonts.body.fontSize,
    fontFamily: "segoe-ui-semi",
    color: "#111111",
    opacity: 0.7,
    marginTop: 10,
  },
  description: {
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
    marginTop: 0,
  },
});
