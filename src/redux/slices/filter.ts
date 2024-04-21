import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action: Action<string>) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
