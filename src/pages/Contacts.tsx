import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import { getContactsLength } from '../redux/selectors';
import { fetchContacts } from '../redux/operations/contacts';

export default function Contacts() {
  // const [alert, setAlert] = useState(false);

  const contactsLength = useSelector(getContactsLength);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showAlert = () => {
    // setAlert(true);
    // setTimeout(() => setAlert(false), 2000);
  };

  return (
    <Box>
      <Typography variant="h4">Phonebook</Typography>
      <ContactForm showAlert={showAlert} />
      {contactsLength > 1 && (
        <Box pt={1}>
          <Filter />
        </Box>
      )}
      <ContactList />
    </Box>
  );
}
