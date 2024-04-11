import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, TextField, Typography, Stack } from '@mui/material';

import { registerUser } from '../redux/operations/auth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const heandleRegisterUser = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={heandleRegisterUser}>
      <Stack spacing={1} p={1}>
        <Typography>
          Don't reuse your bank password because it's a training project and I
          wasn't too worried about security.
        </Typography>
        <TextField
          label="Login"
          placeholder="Unreal name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />

        <TextField
          label="Your email"
          type="email"
          placeholder="Funny email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          required
        />

        <TextField
          type="password"
          // minLength="7"
          label="Password"
          placeholder="Stong password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          required
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
}
