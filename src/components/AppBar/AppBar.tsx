import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Stack, styled } from '@mui/material';

import UserNav from '../UserNav';
import ThemeSwitch from '../ThemeSwitch';
import Pages from '../../constants/pages';
import { getIsAuthenticated } from '../../redux/selectors';

export default function AppBarr() {
  const isAuthenticated = useSelector(getIsAuthenticated);

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

          {isAuthenticated && (
            <NavigationItem data-testid="contacts" to={Pages.contacts}>
              Contacts
            </NavigationItem>
          )}
        </Stack>
        {isAuthenticated ? (
          <UserNav />
        ) : (
          <Stack direction="row" spacing={2}>
            <NavigationItem data-testid="login" to={Pages.login} exact>
              Login
            </NavigationItem>
            <NavigationItem data-testid="register" to={Pages.register}>
              Authorization
            </NavigationItem>
          </Stack>
        )}

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
