"use client";
import React, { useState } from 'react';
import { Task } from '../types/types';
import Image from 'next/image';
import trashIcon from '../public/trashIcon.svg';
import checkIcon from '../public/checkIcon.png';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div className='task-info'>
      <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
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
