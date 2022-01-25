import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index.js';
import Routes from './routes';

declare global {
  interface Console {
    tron: any;
  }
}

function App() {
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

  return (
    <Provider store={store as any}>
      <PersistGate persistor={persistor}>
        <View style={{ backgroundColor: '#332C66', height: STATUS_BAR_HEIGHT }}>
          <StatusBar barStyle="light-content" backgroundColor="#332C66" />
        </View>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
