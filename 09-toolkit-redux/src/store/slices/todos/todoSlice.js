import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
}
export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
})
export const { increment} = todoSlice.actions