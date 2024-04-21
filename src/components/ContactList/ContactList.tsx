import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { getFilteredContacts } from '../../redux/selectors';

import { Contact } from '../Contact';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <Box pt={1}>
      <Typography variant="h5">Contacts</Typography>

      {contacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </Box>
  );
}
