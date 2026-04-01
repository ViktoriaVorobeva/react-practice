import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const baseApi = createApi({ 
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://jsonplaceholder.typicode.com', 
    }), 
    tagTypes: ['Tasks'], 
    endpoints: () => ({}), 
});

export const authBaseApi = createApi({ 
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.v2.react-learning.ru', 
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            //@ts-ignore
            const token = getState().authToken.token;

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },
    }), 
    tagTypes: ['Login'], 
    endpoints: () => ({}), 
});