import { useSelector, useDispatch } from 'react-redux';

import { Button, Stack } from '@mui/material';

import { getUserName } from '../../redux/selectors';
import { logOut } from '../../redux/operations/auth';

import Avatar from '../Avatar';

export default function UserNav() {
  const userName = useSelector(getUserName);
  console.log('userName: ', userName);

  const dispatch = useDispatch();

  const heandleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Stack direction="row" alignItems="center" p={1} spacing={2}>
      <Avatar size="small" name={userName ?? 'User'} />
      {/* <Typography>{userName}</Typography> */}
      <Button onClick={heandleLogOut}>LogOut</Button>
    </Stack>
  );
}
