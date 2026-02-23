import { TaskList, useTasks } from '@features/taskList';
import { FilterButton } from '@shared/ui';
import { FILTER_OPTIONS } from '../const';

export function TaskWidget() {
    const { tasks, filter, removeTask, setFilter } = useTasks();

    return (
        <div>
            <h2>Мои задачи:</h2>

            <FilterButton options={FILTER_OPTIONS} defaultValue={FILTER_OPTIONS[0].value} value={filter} onSelect={setFilter} />
            
            <TaskList tasks={tasks} action={removeTask} />
        </div>
    )
}