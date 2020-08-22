import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { images } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  setProductImage: React.Dispatch<React.SetStateAction<string>>;
}
export default function CurryImagePicker(props: Props) {
  const { setProductImage } = props;
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  // useEffect(() => {
  //   handleImageUpdate();
  // }, [image]);

  // const handleImageUpdate = () => {
  //   if (image) {
  //     setSelectedImage({ uri: image });
  //   }
  // };

  const pickImageHandler = async () => {
    try {
      getPermissionAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage({ uri: result.uri });
        setProductImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const getPermissionAsync = async () => {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  function imageHandler() {
    if (selectedImage.uri) {
      return <Image source={selectedImage} style={styles.image} />;
    }
    return (
      <Image
        style={{
          width: 40,
          height: 40,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={images.noImage}
      />
    );
  }
  return (
    <TouchableOpacity onPress={pickImageHandler} style={styles.container}>
      <View>{imageHandler()}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  container: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#E6E6E6',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
