import { contactsApi } from '../api';
import phoneParser from './phoneParser';

const fetchContacts = async () => {
  const contacts = await contactsApi.getAll();
  const contactsPhones = contacts.data.data.map(contact => contact.phone);
  return contactsPhones.map(phoneParser);
};

export default fetchContacts;
