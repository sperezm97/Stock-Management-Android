import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Theme, images } from '../../../constants';

interface Props {
  uri?: string | undefined;
}

function PhotoContainer({ uri }: Props) {
  function imageHandler() {
    if (typeof uri === 'string') {
      return <Image source={{ uri: uri }} style={styles.image} />;
    } else {
      return (
        <Image
          style={{ width: 80, height: 80, resizeMode: 'contain' }}
          source={images.noImage}
        />
      );
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.circleShape}
        style={styles.imageContainer}
      />
      <View style={styles.circle}>{imageHandler()}</View>
    </View>
  );
}

export default PhotoContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    height: 186,
    width: 192,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  circle: {
    width: 145,
    height: 145,
    borderRadius: 100,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  image: {
    resizeMode: 'contain',
    width: 145,
    height: 145,
    borderRadius: 100,
  },
});
