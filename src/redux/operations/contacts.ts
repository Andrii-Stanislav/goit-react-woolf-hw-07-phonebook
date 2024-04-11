import * as Actions from '../slices/contacts.actions';
import type { DispatchType } from '../store';

import { contactsApi } from '../../api';
import type * as T from '../../types';

const fetchContacts = () => async (dispatch: DispatchType) => {
  dispatch(Actions.fetchContactRequest());
  try {
    const { data } = await contactsApi.getAll();
    dispatch(Actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(Actions.fetchContactError(error as T.ApiError));
  }
};

const createContact = (newContact: T.NewContact) => async (
  dispatch: DispatchType,
) => {
  dispatch(Actions.createContactRequest());
  try {
    const { data } = await contactsApi.createOne(newContact);
    dispatch(Actions.createContactSuccess(data));
  } catch (error) {
    dispatch(Actions.createContactError(error as T.ApiError));
  }
};

const deleteContact = (contactId: string) => async (dispatch: DispatchType) => {
  dispatch(Actions.deleteContactRequest());
  try {
    await contactsApi.deleteOne(contactId);
    dispatch(Actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(Actions.deleteContactError(error as T.ApiError));
  }
};

const editContact = (contact: T.EditContact) => async (
  dispatch: DispatchType,
) => {
  const { id, name, phone } = contact;
  dispatch(Actions.editContactContactRequest());

  try {
    const { data } = await contactsApi.editOne(id, { name, phone });
    dispatch(Actions.editContactContactSuccess(data));
  } catch (error) {
    dispatch(Actions.editContactContactError(error as T.ApiError));
  }
};

export { fetchContacts, createContact, deleteContact, editContact };
