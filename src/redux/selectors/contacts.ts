import { createSelector } from '@reduxjs/toolkit';

import type { StoreType } from '../store';

const getContacts = (state: StoreType) => state.contacts.contacts;

const getFilter = (state: StoreType) => state.filter;

const getIsLoadingContacts = (state: StoreType) => state.contacts.loading;

const getContactsLength = (state: StoreType) => getContacts(state)?.length;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    (contacts ?? []).filter(
      ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export {
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactsLength,
  getIsLoadingContacts,
};
