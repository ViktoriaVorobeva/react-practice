import { useState } from 'react';
import type { ITask } from 'entities/task';
import { INITIAL_TASKS } from '../const';

type TFilter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: ITask[] = INITIAL_TASKS) {    
    const [visibleTasks, setVisibleTasks] = useState<ITask[]>(initial);
    const [filteredTasks, setFilteredTasks] = useState<ITask[]>(initial);
    const [filter, setFilter] = useState<TFilter>('all');

    const removeTask = (id: string): void => {
        setVisibleTasks((tasks) => tasks.filter((task) => task.id !== id));
        setFilteredTasks((tasks) => tasks.filter((task) => task.id !== id));
    };

    const setButtonFilter = (filter: string) => {
        setFilter(filter as TFilter);

        if(filter === 'completed') {
            setFilteredTasks(visibleTasks.filter((task) => task.completed));
        } else if (filter === 'incomplete') {
            setFilteredTasks(visibleTasks.filter((task) => !task.completed));
        } else {
            setFilteredTasks(visibleTasks);
        }
    };

    return {
        tasks: filteredTasks,
        filter,
        setFilter: setButtonFilter,
        removeTask
    }
}