import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit';

import type * as T from '../../types';
import { reducerErrorFunc } from '../../utils';

const initialState = {
  contacts: [] as T.Contact[],
  loading: false,
  error: null as null | string,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactRequest: state => ({ ...state, loading: true }),
    fetchContactSuccess: (state, action: Action<T.ContactsListRes>) => ({
      ...state,
      contacts: action.payload.data,
      loading: false,
    }),
    fetchContactError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    createContactRequest: state => ({ ...state, loading: true }),
    createContactSuccess: (state, action: Action<T.ContactRes>) => ({
      ...state,
      loading: false,
      contacts: [...state.contacts, action.payload.data],
    }),
    createContactError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    editContactContactRequest: state => ({ ...state, loading: true }),
    editContactContactSuccess: (state, action: Action<T.ContactRes>) => ({
      ...state,
      loading: false,
      contacts: [
        ...state.contacts.map(contact =>
          contact.id === action.payload.data.id ? action.payload.data : contact,
        ),
      ],
    }),
    editContactContactError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    deleteContactRequest: state => ({ ...state, loading: true }),
    deleteContactSuccess: (state, action: Action<string>) => ({
      ...state,
      loading: false,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ],
    }),
    deleteContactError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),
  },
});

export default contactsSlice.reducer;
