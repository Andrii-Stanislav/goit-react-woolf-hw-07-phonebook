import { contactsSlice } from './contacts';

export const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  editContactContactRequest,
  editContactContactSuccess,
  editContactContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactsSlice.actions;
