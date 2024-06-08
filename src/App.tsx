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

export const navigationRef = createNavigationContainerRef<any>();

const App = () => {
  const currTheme = DefaultTheme;
  currTheme.colors.background = 'white';

  const onNavigationReady = () => {
    // handle bootsplash
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
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default AppWrapper;
