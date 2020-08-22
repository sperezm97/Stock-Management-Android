import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ProductDetailsScreen: {
    sku: string;
  };
  CameraScreen: undefined;
  AddProductScreen: undefined;
};

export type BottomTabParamList = {
  Scanner: undefined;
  Products: undefined;
  Categories: undefined;
};

export type ProductsParamList = {
  ProductsListScreen: undefined;
};
export type ScannerScreenParamList = {
  Scanner: undefined;
};
export type CameraScreenParamList = {
  CameraScreen: undefined;
};
export type CategoriesParamList = {
  CategoriesScreen: undefined;
};
export type AddProductParamList = {
  AddProduct: undefined;
};
// Type Checking param List

// export type AppStackParamList = {
//   Products: undefined;
//   Profile: undefined;
//   Shopping: undefined;
//   Root: undefined;
//   Details: {
//     id: string;
//   };
//   PlaceOrder: undefined;
//   StatusOrder: {
//     action: 'success' | 'failure';
//   };
//   Order: undefined;
//   AddressList: undefined;
//   AddressCreate: undefined;
//   PaymentCreate: undefined;
//   PaymentList: undefined;
// };

// Type Checking Screens

// Stack
type ProductsScreenStackProp = StackScreenProps<
  ProductsParamList,
  'ProductsListScreen'
>;
type ProductDetailsScreenStackProp = StackScreenProps<
  RootStackParamList,
  'ProductDetailsScreen'
>;
type AddProductScreenStackProp = StackScreenProps<
  RootStackParamList,
  'AddProductScreen'
>;

// Route
export type ProductsScreenRouteProp = RouteProp<
  ProductsParamList,
  'ProductsListScreen'
>;
export type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailsScreen'
>;

export type RootScreenRouteProp = RouteProp<RootStackParamList, 'Root'>;

// Bottom tab navigation props
type ProductsBottomTabNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Products'
>;
export type RootBottomTabNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Root'
>;

// screens
export type ProductsScreenNavigationProp = CompositeNavigationProp<
  ProductsBottomTabNavigationProp,
  StackNavigationProp<ProductsParamList>
>;

export type ProductDetailsScreenNavigationProp = CompositeNavigationProp<
  RootBottomTabNavigationProp,
  StackNavigationProp<RootStackParamList>
>;
export type StackProps = StackNavigationProp<RootStackParamList>;
export type BottomTabProps =
  | ProductsBottomTabNavigationProp
  | RootBottomTabNavigationProp;

export type NavigationProps = {
  navigation:
    | ProductsScreenStackProp
    | ProductDetailsScreenStackProp
    | ProductsBottomTabNavigationProp
    | RootBottomTabNavigationProp
    | ProductsScreenNavigationProp;

  route:
    | ProductsScreenRouteProp
    | RootScreenRouteProp
    | ProductDetailsScreenRouteProp;
};
