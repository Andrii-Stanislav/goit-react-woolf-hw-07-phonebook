import { useSelector, useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/slices/filter.actions';

export function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      value={value}
      onChange={e => dispatch(changeFilter(e.target.value))}
      label="Filter"
    />
  );
}
