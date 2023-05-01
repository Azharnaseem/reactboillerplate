import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    setIsLoggedIn: (state, action) => {
      // console.log("====================================");
      // console.log("action in state", action.payload);
      // console.log("====================================");
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice;
