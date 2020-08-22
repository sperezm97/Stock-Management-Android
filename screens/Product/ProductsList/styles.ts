import { StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { Theme } from '../../../constants';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  content: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: Theme.colors.white,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    elevation: 1,
  },
  content: {
    alignItems: 'center',
    height: '82%',
  },
});
