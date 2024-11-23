"use client";
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
