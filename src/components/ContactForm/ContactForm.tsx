import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Stack } from '@mui/material';

import { PhoneMaskInput } from '../../atoms';
import { getContacts } from '../../redux/selectors';
import { createContact } from '../../redux/operations/contacts';
import type * as TYPES from '../../types';

type Props = {
  showAlert: () => void;
};

export default function ContactForm({ showAlert }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const verifyNewContact = ({
    name: newName,
    phone: newNumber,
  }: TYPES.NewContact) => {
    let verify = true;
    contacts.forEach(({ name, phone }: TYPES.NewContact) => {
      if (name.toLowerCase() === newName.toLowerCase() || newNumber === phone) {
        showAlert();
        verify = false;
      }
    });

    return verify;
  };

  const createNewContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (verifyNewContact({ name, phone })) {
      dispatch(createContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={createNewContact}>
      <Stack spacing={1}>
        <TextField
          label="Name"
          placeholder="Awesome name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <TextField
          label="Phone 1234567890"
          placeholder="Cool phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          InputProps={{
            inputComponent: PhoneMaskInput as any,
          }}
          required
        />

        <Button variant="contained" type="submit">
          Create contact
        </Button>
      </Stack>
    </form>
  );
}
