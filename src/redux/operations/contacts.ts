import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsApi } from '../../api';
import type * as T from '../../types';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await contactsApi.getAll();
    return data;
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (newContact: T.NewContact) => {
    const { data } = await contactsApi.createOne(newContact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string) => {
    await contactsApi.deleteOne(contactId);
    return contactId;
  },
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact: T.EditContact) => {
    const { id, name, phone } = contact;
    const { data } = await contactsApi.editOne(id, { name, phone });
    return data;
  },
);
