import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { getIsLoadingContacts } from '../../redux/selectors';
import { getIsLoadingAuth } from '../../redux/selectors';

export default function Loading() {
  const loadingContacts = useSelector(getIsLoadingContacts);
  const loadingAuth = useSelector(getIsLoadingAuth);

  return (
    <>
      {loadingContacts && (
        <div>
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
      {loadingAuth && (
        <div>
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
    </>
  );
}
