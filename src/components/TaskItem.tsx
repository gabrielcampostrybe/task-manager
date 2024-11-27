"use client";
import React, { useState } from 'react';
import { Task } from '../types/types';
import Image from 'next/image';
import trashIcon from '../public/trashIcon.svg';
import checkIcon from '../public/checkIcon.png';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  updateTaskCompletion: (taskId: number, done: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, updateTaskCompletion }) => {
  const [completed, setCompleted] = useState(task.done);

  const handleCheckboxChange = async () => {
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);

    try {
      await updateTaskCompletion(task.id, newCompletedStatus);
    } catch (error) {
      console.error('Failed to update task completion status:', error);
      setCompleted(completed);
    }
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div className='task-info'>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxChange}
          />
          {completed && (
            <span className="check-icon">
              <Image src={checkIcon} alt="check icon" />
            </span>
          )}
        </label>
        {task.name}
      </div>
      <button className='trash-icon' onClick={() => deleteTask(task.id)}>
        <Image src={trashIcon} alt="trash icon" />
      </button>
    </div>
  );
};

export default TaskItem;
