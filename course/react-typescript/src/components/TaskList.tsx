import React from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える

  return (
    <ul>
      {tasks.map((task, index) =>(
        <li key={`todo-${index}`}>
          {task.isDone ? <s>{task.label}</s> : task.label}
        </li>
      ))}
    </ul>
  );
};
