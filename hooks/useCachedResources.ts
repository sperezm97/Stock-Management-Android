import * as React from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'segoe-ui': require('../assets/fonts/Segoe-UI.ttf'),
          'segoe-ui-bold': require('../assets/fonts/SegoeUIBold.ttf'),
          'segoe-ui-semi': require('../assets/fonts/seguisb.ttf'),
        });
      } catch (e) {
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
