import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';

interface IInitialState {
  openForm: boolean;
  openEmail: boolean;
  openPassword: boolean;
}

const initialState: IInitialState = {
  openForm: false,
  openEmail: false,
  openPassword: false,
};

const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    openAuthForm(state) {
      state.openForm = true;
      state.openEmail = true;
    },
    toggleAuthFormChange(state) {
      state.openEmail = !state.openEmail;
    },
    toggleLoginModeChange(state) {
      state.openPassword = !state.openPassword;
    },
    back(state) {
      state.openEmail
        ? ((state.openEmail = false), (state.openForm = false), (state.openPassword = false))
        : ((state.openEmail = true), (state.openPassword = false));
    },
  },
});

export const authFormSelector = (state: RootState) => state.authForm;

export const { openAuthForm, toggleAuthFormChange, toggleLoginModeChange, back } =
  authFormSlice.actions;

export default authFormSlice.reducer;
