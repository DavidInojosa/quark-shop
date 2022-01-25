import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'quarkshop',
      storage: AsyncStorage,
      whitelist: ['quark'],
    },
    reducers
  );

  return persistedReducer;
};
