import axios from 'axios';
import type * as T from '../types';

export const getAll = () => axios.get<T.Contact[]>('/contacts');

export const createOne = (newContact: T.NewContact) =>
  axios.post<T.ContactRes>('/contacts', newContact);

export const deleteOne = (contactId: string) =>
  axios.delete(`/contacts/${contactId}`);

export const editOne = (contactId: string, newContact: T.NewContact) =>
  axios.put<T.ContactRes>(`/contacts/${contactId}`, newContact);
