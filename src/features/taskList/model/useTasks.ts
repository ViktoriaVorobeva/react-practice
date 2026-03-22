import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ITask } from '@entities/task';
import { useGetTasksQuery } from '@entities/task';

export type TFilter = 'all' | 'completed' | 'incomplete';

export function useTasks() {
    const { data: remoteTasks = [], isLoading, error } = useGetTasksQuery();

    const [tasks, setTasks] = useState<ITask[]>(remoteTasks);
    const [filter, setFilter] = useState<TFilter>('all');

    const removeTask = useCallback((id: string): void => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }, []);

    const filteredTasks = useMemo(() => tasks.filter((task) => {
        if(filter === 'completed') {
            return task.completed;
        }
        if (filter === 'incomplete') {
            return !task.completed;
        }
        return true;
    }), [tasks, filter]);

    useEffect(() => { 
        if (remoteTasks.length > 0 && tasks.length === 0) { 
            setTasks(remoteTasks); 
        } 
    }, [remoteTasks.length]);

    return {
        tasks: filteredTasks,
        filter,
        isLoading, 
        isError: !!error,
        setFilter,
        removeTask,
    }
}