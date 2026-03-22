import { TaskCard, type ITask } from '@entities/task';
import { Button } from '@shared/ui';

import styles from "./TaskList.module.css";

interface IProps {
    tasks: ITask[];
    action: (id: string) => void;
    isLoading: boolean;
    isError: boolean;
};

export function TaskList({ tasks, action, isLoading, isError }: IProps) {
    const isCards = tasks.length !== 0;

    return (
      <div className={styles.tasks}>
        {isLoading && <p className={styles.tasks__loading}>Загрузка задач...</p>}

        {isCards && tasks.map(task => (
          <div className={styles.task__container} key={task.id}>
            <TaskCard task={task} />
            <Button onClick={() => action(task.id)} color='delete'>
              Удалить
            </Button>
          </div>
        ))}

        {isError && <p className={styles.no_tasks}>При загрузке задач произошла ошибка.</p>}

        {!isLoading && !isError && !isCards && <p className={styles.no_tasks}>На сегодня задач больше нет.</p>}
      </div>
    );
}