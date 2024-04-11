import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action: Action<string>) => action.payload,
  },
});

export default filterSlice.reducer;
