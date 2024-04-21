import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';

import { getContactsLength } from '../redux/selectors';
import { fetchContacts } from '../redux/operations/contacts';

export default function Contacts() {
  const contactsLength = useSelector(getContactsLength);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4">Phonebook</Typography>
      <ContactForm />
      {contactsLength > 1 && (
        <Box pt={1}>
          <Filter />
        </Box>
      )}
      <ContactList />
    </Box>
  );
}
