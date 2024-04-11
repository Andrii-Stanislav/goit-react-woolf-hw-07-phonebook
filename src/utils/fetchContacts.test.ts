import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type * as T from '../types';
import fetchContacts from './fetchContacts';

jest.mock('axios');

describe('fetchContacts test', () => {
  let apiResponse: AxiosResponse<T.ContactsListRes>;

  beforeEach(() => {
    //   @ts-ignore
    apiResponse = {
      data: {
        code: 200,
        data: [
          {
            createdAt: '2022-02-19T14:13:04.711Z',
            favorite: false,
            id: '6210faf01f17c7d5c9a75ca0',
            name: 'Oksana',
            owner: '61d1d0dd4447969722a94b8f',
            phone: '1765263525',
            updatedAt: '2022-02-19T14:15:42.005Z',
            _id: '6210faf01f17c7d5c9a75ca0',
          },
          {
            createdAt: '2022-03-27T17:41:27.761Z',
            favorite: false,
            id: '6240a1c70e665b2777803552',
            name: 'Andrii',
            owner: '61d1d0dd4447969722a94b8f',
            phone: '1765263523',
            updatedAt: '2022-03-27T17:41:27.761Z',
            _id: '6240a1c70e665b2777803552',
          },
        ],
        status: 'success',
      },
    };
    //
  });

  test('fetchContacts1', async () => {
    // @ts-ignore
    axios.get.mockReturnValue(apiResponse);
    const data = await fetchContacts();

    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(['(+176)-526-3525', '(+176)-526-3523']);
    expect(data).toMatchSnapshot();
  });
});
