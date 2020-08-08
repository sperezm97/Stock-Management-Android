import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Product } from '../state/types/product.type';
import Block from './Block';
import { Category } from '../state/types/category.type';
import { Theme } from '../constants';
import { Formik } from 'formik';

interface Props {
  product: Product;
  category: Category;
  isEditable: boolean;
}

function ProductCard({ product, category, isEditable }: Props) {
  const initialValues = {
    productName: product.name,
    productdescription: product.description,
    sku: product.sku,
    units: product.units,
    alertQuantity: product.alertQuantity,
    category: category.name,
    isEditable: isEditable,
  };
  return (
    <View style={styles.content}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}>
        {({ handleBlur, handleChange, values }) => (
          <View>
            <TextInput
              style={styles.productName}
              editable={isEditable}
              placeholder={values.productName}
              onBlur={handleBlur('productName')}
              onChangeText={handleChange('productName')}
            />

            <View>
              <Text style={styles.title}>Código de barra</Text>
              <TextInput
                style={styles.description}
                value={product.sku}
                editable={false}
              />
              <View style={styles.line} />
            </View>
            <View>
              <Text style={styles.title}>Descripcion</Text>
              <TextInput
                multiline={true}
                editable={isEditable}
                style={styles.description}
                value={product.description}
                onBlur={handleBlur('product.description')}
                onChangeText={handleChange('product.description')}
              />
              <View style={styles.line} />
            </View>
            <View>
              <Text style={styles.title}>Unidades</Text>
              <TextInput
                multiline={true}
                editable={isEditable}
                style={styles.description}
                value={product.units.toString()}
                onBlur={handleBlur('product.units')}
                onChangeText={handleChange('product.units')}
              />
              <View style={styles.line} />
            </View>

            <View>
              <Text style={styles.title}>Categoria</Text>
              <TextInput
                editable={isEditable}
                style={styles.description}
                value={category.name}
                onBlur={handleBlur('category.name')}
                onChangeText={handleChange('category.name')}
              />
              <View style={styles.line} />
            </View>
            <View>
              <Text style={styles.title}>Alerta de cantidad</Text>
              <TextInput
                multiline={true}
                editable={isEditable}
                style={styles.description}
                value={product.alertQuantity.toString()}
                onBlur={handleBlur('product.alertQuantity')}
                onChangeText={handleChange('product.alertQuantity')}
              />
              <View style={styles.line} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  content: {
    top: '8%',
    alignItems: 'center',
    width: '77%',
  },
  productName: {
    fontSize: 30,
    fontFamily: 'segoe-ui-bold',
    color: Theme.colors.dark.background,
    textAlign: 'center',
  },
  description: {
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
    marginTop: 0,
    // textAlign: 'left',
  },

  line: {
    width: 314.67,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.primary,
    marginTop: 2,
  },
  title: {
    fontSize: Theme.fonts.body.fontSize,
    fontFamily: 'segoe-ui-semi',
    color: '#111111',
    opacity: 0.7,
    marginTop: 10,
  },
});
