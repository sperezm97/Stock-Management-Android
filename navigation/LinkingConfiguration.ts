import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
          Products: {
            screens: {
              ProductsListScreen: "products",
              ProductDetailsCreen: "products/details/:id",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
