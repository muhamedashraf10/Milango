import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import Main from '../screens/Main';

type MainNavigationProps = {};
const Stack = createNativeStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Main}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.Main} component={Main} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
