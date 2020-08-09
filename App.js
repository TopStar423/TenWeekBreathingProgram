/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './configureStore';
import MainPage from './app/views/MainPage';

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainPage />
          </PersistGate>
      </Provider>
  );
};

export default App;
