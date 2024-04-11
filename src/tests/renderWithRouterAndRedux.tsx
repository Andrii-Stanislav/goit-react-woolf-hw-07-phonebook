import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, StoreType } from '../redux/store';

type RenderOptions = {
  initRoute?: string;
  store?: StoreType;
};

const renderWithRouterAndRedux = (
  component: ReactElement,
  options?: RenderOptions,
) =>
  render(
    <Provider store={{ ...store, ...options?.store }}>
      <MemoryRouter initialEntries={[options?.initRoute ?? '/']}>
        {component}
      </MemoryRouter>
    </Provider>,
    // example to wrapper
    // { wrapper: Wrapper },
  );

export default renderWithRouterAndRedux;
