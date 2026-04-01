import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@features/authRouting/model/authSlice';
import { baseApi, authBaseApi } from '@shared/api/baseApi';

export const store = configureStore({ 
    reducer: { 
        authToken: authReducer,
        [baseApi.reducerPath]: baseApi.reducer, 
        [authBaseApi.reducerPath]: authBaseApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware, authBaseApi.middleware),
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
