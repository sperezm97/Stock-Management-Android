import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './state/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaView>
      </Provider>
    );
  }
}
