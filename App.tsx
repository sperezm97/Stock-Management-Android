import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
        <StatusBar />
      </SafeAreaView>
    );
  }
}
