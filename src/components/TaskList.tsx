"use client";
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  updateTaskCompletion: (id: number, completed: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, updateTaskCompletion }) => {
  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTaskCompletion={updateTaskCompletion} />
      ))}
    </div>
  );
};

export default TaskList;
