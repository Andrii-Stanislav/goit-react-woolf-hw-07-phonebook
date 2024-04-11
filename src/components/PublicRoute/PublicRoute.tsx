import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /redirectTo
 * - В противном случае рендерит компонент
 */

type Props = {
  component: JSX.Element;
  redirectTo: string;
  routeProps: any;
};

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}: Props) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      // @ts-ignore
      render={props =>
        // @ts-ignore
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          // @ts-ignore
          <Component {...props} />
        )
      }
    />
  );
}
