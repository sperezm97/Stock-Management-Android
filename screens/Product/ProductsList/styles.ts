import { StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { Theme } from '../../../constants';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
  },
  header: {
    height: 110,
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    elevation: 2,
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 20,
  },
});
