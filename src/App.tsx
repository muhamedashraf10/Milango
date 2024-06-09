import {
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {StatusBar} from 'react-native';
import './i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ErrorBoundary from './components/ErrorBoundry';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {syncStoragePersister} from './configs/appQueryClient';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';

export const navigationRef = createNavigationContainerRef<any>();

const App = () => {
  const currTheme = DefaultTheme;
  currTheme.colors.background = 'white';

  const onNavigationReady = () => {
    return BootSplash.hide({fade: true});
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={currTheme}
      onReady={onNavigationReady}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <MainNavigation />
      <Toast />
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <PersistQueryClientProvider
      persistOptions={{persister: syncStoragePersister}}
      client={appQueryClient}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
};

export default AppWrapper;
