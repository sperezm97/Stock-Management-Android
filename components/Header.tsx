import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsScreenNavigationProp } from "../types";
import PhotoContainer from "./PhotoContainer";
import { Theme } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {}

const Header = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/header-shape.png")}
        style={styles.image}
      />
      <View
        style={{
          width: "100%",
          top: 30,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            style={{ alignSelf: "flex-start" }}
            size={28}
            color={Theme.colors.light.background}
            name="arrow-back"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "segoe-ui-bold",
            color: Theme.colors.light.background,
          }}
        >
          Header
        </Text>
        <MaterialIcons
          size={28}
          color={Theme.colors.light.background}
          name="edit"
        />
      </View>
      <View style={styles.photoContainer}>
        <PhotoContainer />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    transform: [{ translateX: 10 }, { translateY: -90 }],
  },
  photoContainer: {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    top: "18%",
  },
  container: {
    height: 500,
    width: 500,
  },
});
