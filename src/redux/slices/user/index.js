import userSlice from "./slice";
export const userSliceReducer = userSlice.reducer;
export const { setIsLoggedIn, setUserData, setToken } = userSlice.actions;
export const selectToken = (state) => state.user.token;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserData = (state) => state.user.userData;
