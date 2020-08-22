import React, { useState } from 'react';
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
  quantity: '',
  category: '',
  sellingPrice: '',
};

function ProductCard(props: Props) {
  const [selectedField, setSelectedField] = useState({
    label: '',
  });
  const { onSubmit, isEditable, defaultValue } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleBlur, handleChange }) => (
        <View style={styles.content}>
          <View>
            <Text style={styles.productName}>{defaultValue.product.name}</Text>
          </View>
          <Input
            label="Codigo de Barra"
            value={defaultValue.product.sku}
            onChangeText={handleChange('sku')}
            onBlur={handleBlur('sku')}
            editable={false}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            multiline={true}
            label="Descripcion"
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            placeholder={defaultValue.product.description}
            editable={isEditable}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Unidades por Paquete"
            value={values.units}
            onChangeText={handleChange('units')}
            onBlur={handleBlur('units')}
            placeholder={defaultValue.product.units.toString()}
            editable={isEditable}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Categoria"
            value={values.category}
            onChangeText={handleChange('category')}
            onBlur={handleBlur('category')}
            placeholder={defaultValue.category.name}
            editable={isEditable}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Cantidad"
            value={values.quantity}
            onChangeText={handleChange('quantity')}
            onBlur={handleBlur('quantity')}
            placeholder={
              defaultValue.product.quantity
                ? defaultValue.product.quantity.toString()
                : '0'
            }
            editable={isEditable}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Precio de Venta"
            value={values.sellingPrice}
            onChangeText={handleChange('sellingPrice')}
            onBlur={handleBlur('sellingPrice')}
            placeholder={
              defaultValue.product.sellingPrice
                ? defaultValue.product.sellingPrice.toString()
                : '0'
            }
            editable={isEditable}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Alerta de Cantidad"
            value={values.quantity}
            onChangeText={handleChange('alertQuantity')}
            onBlur={handleBlur('alertQuantity')}
            placeholder={
              defaultValue.product.alertQuantity
                ? defaultValue.product.alertQuantity.toString()
                : '0'
            }
            editable={isEditable}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </View>
      )}
    </Formik>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  content: {
    minWidth: '100%',
  },
  productName: {
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
    marginTop: 1,
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
