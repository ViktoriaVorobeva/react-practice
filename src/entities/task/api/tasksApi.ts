import { baseApi } from '@shared/api/baseApi';

import type { ITask } from '../model/types';

export const tasksApi = baseApi.injectEndpoints({ 
    endpoints: (build) => ({ 
        getTasks: build.query<ITask[], void>({ 
            query: () => 'todos', 
            transformResponse: (response: ITask[]) => response.map((task) => ({...task, id: String(task.id)})), 
            providesTags: ['Tasks'], 
        }), 
    }), 
    overrideExisting: false, 
});

export const { useGetTasksQuery } = tasksApi;