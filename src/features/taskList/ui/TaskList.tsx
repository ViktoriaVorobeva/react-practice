import { TaskCard, type ITask } from '@entities/task';

import styles from "./TaskList.module.css";

interface IProps {
    tasks: ITask[];
    action: (id: string) => void;
};

export function TaskList({ tasks, action }: IProps) {
    const isCards = tasks.length !== 0;

    return (
      <div className={styles.tasks}>
        {isCards && tasks.map(task => (
          <TaskCard key={task.id} task={task} action={action} />
        ))}

        {!isCards && <p className={styles.no_tasks}>На сегодня задач больше нет.</p>}
      </div>
    );
}