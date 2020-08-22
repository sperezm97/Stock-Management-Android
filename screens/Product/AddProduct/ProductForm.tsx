import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Product } from '../../../state/types/product.type';
import { Category } from '../../../state/types/category.type';
import { Theme } from '../../../constants';
import { Formik } from 'formik';
import Input from '../../../components/Input';
import CurryImagePicker from '../../../components/CurryImagePicker';
import { Picker } from '@react-native-community/picker';

interface Props {
  onSubmit: (
    productData: Product,
    selectedCategory: number | string,
    photoUri: string,
  ) => void;
  defaultValue: {
    categories: Category[];
  };
}
const initialValues: Product = {
  name: '',
  description: '',
  sku: '',
  units: 0,
  quantity: 0,
  categoryId: 0,
  sellingPrice: 0,
  alertQuantity: 0,
};

function ProductForm(props: Props) {
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string | number;
  }>({ id: 0 });
  const [productImage, setProductImage] = useState('');
  const [selectedField, setSelectedField] = useState({
    label: '',
  });
  const { onSubmit, defaultValue } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() =>
        onSubmit(initialValues, selectedCategory.id, productImage)
      }>
      {({ values, handleBlur, handleChange }) => (
        <View style={styles.content}>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <CurryImagePicker setProductImage={setProductImage} />
          </View>
          <Input
            label="Nombre del producto"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Codigo de Barra"
            onChangeText={handleChange('sku')}
            onBlur={handleBlur('sku')}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            multiline={true}
            label="Description"
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Unidades"
            value={values.units.toString()}
            onChangeText={handleChange('units')}
            onBlur={handleBlur('units')}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Picker
            selectedValue={selectedCategory.id}
            style={{ height: 50, color: Theme.colors.gray }}
            onValueChange={(itemValue) =>
              setSelectedCategory({ id: itemValue })
            }>
            {defaultValue.categories.map((category) => (
              <Picker.Item
                label={category.name}
                value={category.id}
                key={category.id}
              />
            ))}
          </Picker>
          <Input
            label="Cantidad"
            value={values.quantity.toString()}
            onChangeText={handleChange('quantity')}
            onBlur={handleBlur('quantity')}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <Input
            label="Alerta de Cantidad"
            value={
              values.alertQuantity !== undefined
                ? values.alertQuantity.toString()
                : '0'
            }
            onChangeText={handleChange('alertQuantity')}
            onBlur={handleBlur('alertQuantity')}
            keyboardType="number-pad"
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
          <View style={{ paddingTop: 20 }}>
            <Button
              title="submit"
              color={Theme.colors.primary}
              onPress={() =>
                onSubmit(values, selectedCategory.id, productImage)
              }
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default ProductForm;

const styles = StyleSheet.create({
  content: {
    minWidth: '85%',
    paddingVertical: 20,
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
