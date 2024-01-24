import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  phoneNumber: null,
  userName: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      const { phoneNumber, userName } = action.payload;
      state.phoneNumber = phoneNumber;
      state.isLoggedIn = true;
      state.userName = userName;
    },
    setSignOut: (state) => {
      state.phoneNumber = null;
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectPhoneNumber = (state) => state.userAuth.phoneNumber;
export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;
