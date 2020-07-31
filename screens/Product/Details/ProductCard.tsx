import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Product } from '../../../state/types/product.type';
import { Category } from '../../../state/types/category.type';
import { Theme } from '../../../constants';
import { Formik } from 'formik';
import Input from '../../../components/Input';

interface Props {
  onSubmit: (values: any) => void;
  defaultValue: {
    product: Product;
    category: Category;
  };
  isEditable: boolean;
}
const initialValues = {
  name: '',
  description: '',
  sku: '',
  units: '',
  alertQuantity: '',
  category: '',
};

function ProductCard(props: Props) {
  const { onSubmit, isEditable, defaultValue } = props;
  console.log(defaultValue);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleBlur, handleChange }) => (
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.productname}>{defaultValue.product.name}</Text>
          </View>
          <Input
            label="Codigo de Barra"
            value={values.sku}
            onChangeText={handleChange('sku')}
            onBlur={handleBlur('description')}
            placeholder={defaultValue.product.sku}
            editable={isEditable}
          />
          <Input
            label="Description"
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('units')}
            placeholder={defaultValue.product.description}
            editable={isEditable}
          />
          <Input
            label="Unidades"
            value={values.units}
            onChangeText={handleChange('units')}
            onBlur={handleBlur('category')}
            placeholder={defaultValue.product.units.toString()}
            editable={isEditable}
            keyboardType="number-pad"
          />
          <Input
            label="Categoria"
            value={values.category}
            onChangeText={handleChange('category')}
            onBlur={handleBlur('alertQuantity')}
            placeholder={defaultValue.category.name}
            editable={isEditable}
          />
          <Input
            label="Alerta de Cantidad"
            value={values.alertQuantity}
            onChangeText={handleChange('alertQuantity')}
            onBlur={handleBlur('')}
            placeholder={defaultValue.product.alertQuantity.toString()}
            editable={isEditable}
            keyboardType="number-pad"
          />
        </View>
      )}
    </Formik>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  content: {
    top: '8%',
    alignItems: 'center',
    width: '77%',
  },
  productname: {
    fontSize: 30,
    fontFamily: 'segoe-ui-bold',
    color: Theme.colors.dark.background,
    textAlign: 'center',
  },
  input: {
    fontSize: Theme.fonts.caption.fontSize,
    color: Theme.colors.gray,
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

  inputContainer: {
    flex: 1,
  },
});
