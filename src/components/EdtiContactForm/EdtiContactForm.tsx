import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PhoneMaskInput } from '../PhoneMaskInput';
import { getContacts } from '../../redux/selectors';
import { editContact } from '../../redux/operations/contacts';

import { Button, TextField, Stack } from '@mui/material';

type Props = {
  id: string;
  name: string;
  number: string;
  onCloseModal: () => void;
};

export function EdtiContactForm({ id, name, number, onCloseModal }: Props) {
  const [editName, setName] = useState(name);
  const [editNumber, setNumber] = useState(number);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const verifyNewContact = (editName: string, editNumber: string) => {
    const error = contacts.some(
      ({ id: contactId, name, phone }) =>
        contactId !== id &&
        ((name as string).toLowerCase() === editName.toLowerCase() ||
          editNumber === phone),
    );

    return !error;
  };

  const handleEditContact = (event: SyntheticEvent) => {
    event.preventDefault();

    if (verifyNewContact(editName, editNumber)) {
      dispatch(editContact({ id, name: editName, phone: editNumber }));
      setName('');
      setNumber('');
      onCloseModal();
    }
  };

  return (
    <form onSubmit={handleEditContact}>
      <Stack spacing={1} p={2}>
        <TextField
          label="Name:"
          placeholder="Awesome name"
          value={editName}
          onChange={e => setName(e.target.value)}
          required
        />
        <TextField
          label="Phone 1234567890"
          placeholder="Cool phone number"
          value={editNumber}
          onChange={e => setNumber(e.target.value)}
          InputProps={{
            inputComponent: PhoneMaskInput as any,
          }}
          required
        />
        <Button variant="contained" type="submit">
          Edit contact
        </Button>
      </Stack>
    </form>
  );
}
