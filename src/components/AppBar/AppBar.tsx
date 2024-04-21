import { NavLink } from 'react-router-dom';

import { Stack, styled } from '@mui/material';

import { ThemeSwitch } from '../ThemeSwitch';
import { Pages } from '../../constants/pages';

export function AppBar() {
  return (
    <Stack alignItems="center">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="400px"
        p={1}
        spacing={2}
      >
        <Stack direction="row" spacing={2}>
          <NavigationItem data-testid="home-link" to={Pages.home} exact>
            Home
          </NavigationItem>

          <NavigationItem data-testid="contacts" to={Pages.contacts}>
            Contacts
          </NavigationItem>
        </Stack>

        <ThemeSwitch />

        <NavigationItem data-testid="docks-link" to={Pages.docks} exact>
          Docks
        </NavigationItem>
      </Stack>
    </Stack>
  );
}

const NavigationItem = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;
