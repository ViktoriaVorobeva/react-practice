import { TaskCard, type ITask } from '@entities/task';

import styles from "./TaskList.module.css";
import { Button } from '@shared/ui';

interface IProps {
    tasks: ITask[];
    action: (id: string) => void;
};

export function TaskList({ tasks, action }: IProps) {
    const isCards = tasks.length !== 0;

    return (
      <div className={styles.tasks}>
        {isCards && tasks.map(task => (
          <div className={styles.task__container} key={task.id}>
            <TaskCard task={task} />
            <Button onClick={() => action(task.id)} color='delete'>
              Удалить
            </Button>
          </div>
        ))}

        {!isCards && <p className={styles.no_tasks}>На сегодня задач больше нет.</p>}
      </div>
    );
}