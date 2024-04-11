import type { ApiError } from '../types';

const reducerErrorFunc = (payload: ApiError) => {
  console.error(payload.code, ': ', payload.message);
  return payload.message;
};
export default reducerErrorFunc;
