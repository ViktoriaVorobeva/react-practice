import { authBaseApi } from '@shared/api/baseApi';
import type { IFormResponce, IFormValues, IUserResponce } from '../model/types';

export const authApi = authBaseApi.injectEndpoints({ 
    endpoints: (build) => ({ 
        postAuth: build.mutation<IFormResponce, IFormValues>({ 
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Login'], 
        }), 
        getUser: build.query<string, void>({ 
            query: () => 'users/me', 
            transformResponse: (response: IUserResponce) => response.name, 
        }), 
    }), 
    overrideExisting: false, 
});

export const { usePostAuthMutation, useGetUserQuery } = authApi;