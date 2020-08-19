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
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    height: '82%',
  },
});
