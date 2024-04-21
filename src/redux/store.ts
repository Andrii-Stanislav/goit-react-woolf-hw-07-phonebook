import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slices/theme';
import contactsReducer from './slices/contacts';
import filter from './slices/filter';

const reducer = {
  contacts: contactsReducer,
  filter,
  theme: themeReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export type GetStateType = typeof store.getState;

export { store };
