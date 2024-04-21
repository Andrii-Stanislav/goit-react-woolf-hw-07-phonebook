import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, GlobalStyles, styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Pages } from './constants/pages';
import { getDarkTheme } from './redux/selectors';

import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { Loading } from './components/Loading';

const HomePage = lazy(
  () => import('./pages/HomePage' /* webpackChunkName: "home-page-view" */),
);
const Docks = lazy(
  () => import('./pages/Docks' /* webpackChunkName: "docks-view" */),
);
const Contacts = lazy(
  () => import('./pages/Contacts' /* webpackChunkName: "contacts-view" */),
);

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
});

export default function App() {
  const darkTheme = useSelector(getDarkTheme);

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
              <Route exact path={Pages.home} component={HomePage} />

              <Route exact path={Pages.docks} component={Docks} />

              <Route path={Pages.contacts} component={Contacts} />

              <Redirect to={Pages.home} />
            </Switch>
          </Suspense>
          <Loading />
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
