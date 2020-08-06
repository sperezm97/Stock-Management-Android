import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Products: undefined;
  Categories: undefined;
  AddProduct: undefined;
};

export type ProductsParamList = {
  ProductsListScreen: undefined;
  ProductDetailsScreen: {
    sku: string;
  };
};
export type TabOneParamList = {
  TabOneScreen: undefined;
};
export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type CategoriesParamList = {
  CategoriesScreen: undefined;
};
export type AddProductParamList = {
  AddProduct: undefined;
};
// Type Checking param List

export type AppStackParamList = {
  Products: undefined;
  Profile: undefined;
  Shopping: undefined;
  Root: undefined;
  Details: {
    id: string;
  };
  PlaceOrder: undefined;
  StatusOrder: {
    action: 'success' | 'failure';
  };
  Order: undefined;
  AddressList: undefined;
  AddressCreate: undefined;
  PaymentCreate: undefined;
  PaymentList: undefined;
};

// Type Checking Screens

// Stack
type ProductsScreenStackProp = StackScreenProps<
  ProductsParamList,
  'ProductsListScreen'
>;
type ProductDetailsScreenStackProp = StackScreenProps<
  ProductsParamList,
  'ProductDetailsScreen'
>;

// Route
type ProductsScreenRouteProp = RouteProp<
  ProductsParamList,
  'ProductsListScreen'
>;
type ProductDetailsScreenRouteProp = RouteProp<
  ProductsParamList,
  'ProductDetailsScreen'
>;

type RootScreenRouteProp = RouteProp<RootStackParamList, 'Root'>;

// Bottom tab navigation props
type ProductsBottomTabNavigationProp = BottomTabNavigationProp<
  ProductsParamList,
  'ProductsListScreen'
>;
type RootBottomTabNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Root'
>;

// screens
export type ProductsScreenNavigationProp = CompositeNavigationProp<
  ProductsBottomTabNavigationProp,
  StackNavigationProp<ProductsParamList>
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
