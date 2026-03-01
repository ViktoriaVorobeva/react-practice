import { useCallback, useMemo, useState } from 'react';
import type { ITask } from 'entities/task';
import { INITIAL_TASKS } from '../const';

export type TFilter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: ITask[] = INITIAL_TASKS) {    
    const [tasks, setTasks] = useState<ITask[]>(initial);
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

    return {
        tasks: filteredTasks,
        filter,
        setFilter,
        removeTask
    }
}