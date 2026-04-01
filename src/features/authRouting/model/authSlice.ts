import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
    token: string;
}

const initialState: IAuth = {
  token: '',
};

const authSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {  
    setAuthToken: (state, action) => {  
      state.token = action.payload;  
    },  
    clearAuthToken: (state) => {  
      state.token = '';  
    },  
  }, 
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;