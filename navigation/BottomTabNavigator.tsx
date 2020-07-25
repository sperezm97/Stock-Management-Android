import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";

import { Theme } from "../constants/";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  ProductsParamList,
} from "../types";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsListScreen from "../screens/ProductsListScreen";
import { productActions } from "../state/domain/actions/product.action";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Theme.colors[colorScheme].tint,
        allowFontScaling: true,
        labelStyle: {
          fontSize: 13,
          marginBottom: 8,
        },
        style: {
          padding: 5,
          height: 60,
        },
      }}
    >
      <BottomTab.Screen
        name="Products"
        component={ProductsListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="kitchen" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={TabOneNavigator}
        name="TabOne"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialIcons size={18} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: "Details",
          headerTitleStyle: {
            fontSize: Theme.fonts.h1.fontSize,
            color: Theme.colors.gray,
            fontFamily: "segoe-ui-bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const ProductsListStack = createStackNavigator<ProductsParamList>();

function ProductsListNavigator() {
  return (
    <ProductsListStack.Navigator>
      <ProductsListStack.Screen
        name="ProductsListScreen"
        component={ProductsListScreen}
        options={{
          headerTitle: "Products",
          headerTitleStyle: {
            fontSize: Theme.fonts.h1.fontSize,
            color: Theme.colors.gray,
            fontFamily: "segoe-ui-bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <ProductsListStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          // header: ({navigation}) => {return},
          headerTitle: "Details",
          headerTitleStyle: {
            fontSize: Theme.fonts.h1.fontSize,
            color: Theme.colors.gray,
            fontFamily: "segoe-ui-bold",
          },
          headerTitleAlign: "center",
        }}
        initialParams={{ sku: "" }}
      />
    </ProductsListStack.Navigator>
  );
}

const stackNavigatorProps: StackNavigationOptions = {};
