import { createSlice } from '@reduxjs/toolkit';

const initialState = {value: {email: '', password: ''}}

export const userSlice = createSlice({
  name: 'user',
  initialState: {value: {email: '', password: ''}},
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState;
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer;