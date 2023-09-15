import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    currentValue: 0,
    lastUpdated: new Date(),
  },
  reducers: {
    increment: () => {},
  },
});

const incrementSlice = createSlice({
  name: 'incrementValues',
  initialState: {
    total: 1,
    modifiers: [],
  },
  reducers: {
    countIncrement: () => {},
  },
});

export const { increment } = walletSlice.actions;

export default walletSlice.reducer;
