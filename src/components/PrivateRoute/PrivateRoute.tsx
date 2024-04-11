import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

type Props = {
  component: JSX.Element;
  redirectTo: string;
  routeProps: any;
};

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}: Props) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      // @ts-ignores
      render={props =>
        isAuthenticated ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}
