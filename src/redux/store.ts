import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  contactsPersistConfig,
  middleware,
} from './persistConfig';

import authReducer from './slices/auth';
import themeReducer from './slices/theme';
import contactsReducer from './slices/contacts';
import filter from './slices/filter';

const persistedReducer = persistReducer(contactsPersistConfig, authReducer);
const reducer = {
  auth: persistedReducer,
  contacts: contactsReducer,
  filter,
  theme: themeReducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export type GetStateType = typeof store.getState;

export { store, persistor };
