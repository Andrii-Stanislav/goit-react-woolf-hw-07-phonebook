import axios from 'axios';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3001/api';

export const token = {
  set(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export * as authApi from './auth';
export * as contactsApi from './contacts';
