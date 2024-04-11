import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, TextField, Stack } from '@mui/material';

import { logIn } from '../redux/operations/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const heandleLoginUser = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={heandleLoginUser}>
      <Stack spacing={1} p={1}>
        <TextField
          type="email"
          label="Your email"
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
          Login
        </Button>
      </Stack>
    </form>
  );
}
