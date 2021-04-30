import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { data: 'test' },
  reducers: {
    setData(state) {
      state.data = ['mleko'];
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
