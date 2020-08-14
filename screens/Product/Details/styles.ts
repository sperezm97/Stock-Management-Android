import { StyleSheet, Dimensions, ViewStyle, ImageStyle } from 'react-native';
import { Theme } from '../../../constants';

interface Styles {
  container: ViewStyle;
  detailsWrapper: ViewStyle;
  photoContainer: ViewStyle;
  header: ViewStyle;
  image: ImageStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  detailsWrapper: {
    backgroundColor: Theme.colors.white,
    flex: 1,
    width: Dimensions.get('window').width,
  },
  photoContainer: { zIndex: 1, marginBottom: 40 },
  header: {
    zIndex: 1,
  },
  image: {
    height: 500,
    width: '100%',
    transform: [{ translateY: -90 }],
    position: 'absolute',
    zIndex: 0,
  },
});
