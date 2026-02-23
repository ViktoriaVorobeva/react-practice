import cn from 'classnames';
import { Button } from '@shared/ui';
import type { ITask } from '../model/types'
import styles from "./TaskCard.module.css";

interface IProps {
    task: ITask;
    action: (id: string) => void;
};
  
export function TaskCard({ task, action }: IProps) {
    return (
      <div className={cn([styles.card, {
        [styles.done]: task.completed,
      }])}>
        <p className={cn({
            [styles.done__text]: task.completed,
        })}>{task.title}</p>

        <Button onClick={() => action(task.id)} color='delete'>
            Удалить
        </Button>
      </div>
    );
};