import { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, GlobalStyles, styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Pages from './constants/pages';
import { getCurrentUser } from './redux/operations/auth';
import { getDarkTheme } from './redux/selectors';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import Container from './components/Container';
import Loading from './components/Loading';
import Pnotify from './components/Pnotify';

const HomePage = lazy(
  () => import('./pages/HomePage' /* webpackChunkName: "home-page-view" */),
);
const Docks = lazy(
  () => import('./pages/Docks' /* webpackChunkName: "docks-view" */),
);
const Contacts = lazy(
  () => import('./pages/Contacts' /* webpackChunkName: "contacts-view" */),
);
const LoginPage = lazy(
  () => import('./pages/LoginPage' /* webpackChunkName: "login-view" */),
);
const Register = lazy(
  () => import('./pages/Register' /* webpackChunkName: "register-view" */),
);

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
});

export default function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(getDarkTheme);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={muiTheme}>
      <StyledApp darkTheme={darkTheme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: darkTheme ? '#464646' : '#e6e6e6' },
          }}
        />
        <AppBar />
        <Container>
          <Suspense fallback={<Loading />}>
            <Switch>
              {/* @ts-ignore */}
              <PublicRoute exact path={Pages.home} component={HomePage} />
              {/* @ts-ignore */}
              <PublicRoute exact path={Pages.docks} component={Docks} />
              <PrivateRoute
                path={Pages.contacts}
                // @ts-ignore
                component={Contacts}
                redirectTo={Pages.login}
              />
              <PublicRoute
                path={Pages.login}
                restricted
                // @ts-ignore
                component={LoginPage}
                redirectTo={Pages.contacts}
              />
              <PublicRoute
                path={Pages.register}
                restricted
                // @ts-ignore
                component={Register}
                redirectTo={Pages.contacts}
              />
              <Redirect to={Pages.docks} />
            </Switch>
          </Suspense>
          <Loading />
          <Pnotify />
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled(Box)<{ darkTheme: boolean }>`
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
