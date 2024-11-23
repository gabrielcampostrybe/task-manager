"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import NewTaskModal from "../components/NewTaskModal";
import DeleteTaskModal from "../components/DeleteTaskModal";
import { Task } from "../types/types";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    setIsNewTaskOpen(false);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setIsDeleteTaskOpen(false);
  };

  const handleDeleteClick = (id: number) => {
    const task = tasks.find((task) => task.id === id) || null;
    setTaskToDelete(task);
    setIsDeleteTaskOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="tasks-container">
        <div className="tasks">
          <h2 className="tasks-title">Suas tarefas de hoje</h2>
          <TaskList tasks={tasks} deleteTask={handleDeleteClick} />

          {isNewTaskOpen && (
            <NewTaskModal
              onAdd={addTask}
              onClose={() => setIsNewTaskOpen(false)}
            />
          )}

          {isDeleteTaskOpen && taskToDelete && (
            <DeleteTaskModal
              taskName={taskToDelete.name}
              onDelete={() => deleteTask(taskToDelete.id)}
              onClose={() => setIsDeleteTaskOpen(false)}
            />
          )}
        </div>
        <div>
          <button
            className="add-task-button"
            onClick={() => setIsNewTaskOpen(true)}
          >
            Adicionar nova tarefa
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
