import React from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  // フォームの値を保持する

  // Taskの登録

  // 完了したTaskを削除する

  return (
    <></>
  );
};

