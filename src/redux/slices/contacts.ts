import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type * as T from '../../types';
import { reducerErrorFunc } from '../../utils';
import {
  fetchContacts,
  createContact,
  editContact,
  deleteContact,
} from '../operations/contacts';

type ContactsSliceType = {
  items: T.Contact[];
  isLoading: boolean;
  error: null | string;
};

const onPending = (state: ContactsSliceType) => ({ ...state, isLoading: true });

const onError = (state: ContactsSliceType, action: PayloadAction<any>) => ({
  ...state,
  isLoading: false,
  error: reducerErrorFunc(action.payload as T.ApiError),
});

const initialState: ContactsSliceType = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // * fetchContacts
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: action.payload,
      }))
      .addCase(fetchContacts.rejected, onError)
      // * createContact
      .addCase(createContact.pending, onPending)
      .addCase(createContact.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      }))
      .addCase(createContact.rejected, onError)
      // * editContact
      .addCase(editContact.pending, onPending)
      .addCase(editContact.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: [
          ...state.items.map(contact =>
            contact.id === action.payload.id ? action.payload : contact,
          ),
        ],
      }))
      .addCase(editContact.rejected, onError)
      // * deleteContact
      .addCase(deleteContact.pending, onPending)
      .addCase(deleteContact.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: [...state.items.filter(({ id }) => id !== action.payload)],
      }))
      .addCase(deleteContact.rejected, onError);
  },
});

export default contactsSlice.reducer;
