import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsScreenNavigationProp } from "../types";
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
          flex: 1,
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
          Detalles
        </Text>
        <MaterialIcons
          size={28}
          color={Theme.colors.light.background}
          name="edit"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    transform: [{ translateY: -90 }],
  },
  container: {
    height: 500,
    width: Dimensions.get("window").width,
  },
});
