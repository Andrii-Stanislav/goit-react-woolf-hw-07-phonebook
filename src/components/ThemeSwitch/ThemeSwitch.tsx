import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Switch } from '@mui/material';

import { changeTheme } from '../../redux/slices/theme.actions';

export function ThemeSwitch() {
  const [darkTheme, setDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setDarkTheme(prevTheme => !prevTheme);
    dispatch(changeTheme());
  };
  return <Switch checked={darkTheme} onChange={handleChange} />;
}
