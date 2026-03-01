import { TaskList, useTasks, type TFilter } from '@features/taskList';
import { FilterButton } from '@shared/ui';
import { FILTER_OPTIONS } from '../const';

export function TaskWidget() {
    const { tasks, filter, removeTask, setFilter } = useTasks();

    return (
        <div>
            <h2>Мои задачи:</h2>

            <FilterButton options={FILTER_OPTIONS} value={filter} onSelect={(value) => setFilter(value as TFilter)} />
            
            <TaskList tasks={tasks} action={removeTask} />
        </div>
    )
}