import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './bikes';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'user',
  storage,
  expire: 4000,
};

const persistedReducer = persistReducer(persistConfig, bikesReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
