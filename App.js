import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import store from './app/store/store';

import HomeNavigator from './Navigation/HomeNavigator';
import AuthNavigator from './Navigation/AuthNavigator';

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isLoggedIn && <HomeNavigator />
        }
        {
          !isLoggedIn && <AuthNavigator />
        }
      </NavigationContainer>
    </Provider>
  );
};

export default App;