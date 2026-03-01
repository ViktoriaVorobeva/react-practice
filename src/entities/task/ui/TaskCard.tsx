import cn from 'classnames';
import type { ITask } from '../model/types'
import styles from "./TaskCard.module.css";
import React from 'react';

interface IProps {
    task: ITask;
};

export const TaskCard = React.memo(({ task }: IProps) => {
  return (
    <div className={cn([styles.card, {
      [styles.done]: task.completed,
    }])}>
      <p className={cn({
          [styles.done__text]: task.completed,
      })}>{task.title}</p>
    </div>
  );
});
