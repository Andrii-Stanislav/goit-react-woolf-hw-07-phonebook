import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { getIsLoadingContacts } from '../../redux/selectors';

export function Loading() {
  const loadingContacts = useSelector(getIsLoadingContacts);

  return (
    <>
      {loadingContacts && (
        <div>
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
    </>
  );
}
