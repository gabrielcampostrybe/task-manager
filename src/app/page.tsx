"use client";
import React, { useState, useEffect } from "react";
import { Task } from "../types/types";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import NewTaskModal from "../components/NewTaskModal";
import DeleteTaskModal from "../components/DeleteTaskModal";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        if (response.ok) {
          const data: Task[] = await response.json();
          setTasks(data); // Includes "done" status
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (taskName: string) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName }),
      });
      if (response.ok) {
        const newTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setIsNewTaskOpen(false);
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('An error occurred');
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId: id }),
      });
      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        setIsDeleteTaskOpen(false);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('An error occurred');
    }
  };

  const updateTaskCompletion = async (taskId: number, done: boolean) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId, done }),
      });
      if (response.ok) {
        const updatedTask = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      }
    } catch (error) {
      console.error('Error updating task completion status:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <Header />
      <div className="tasks-container">
        <div className="tasks">
          <h2 className="tasks-title">Suas tarefas de hoje</h2>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTaskCompletion={updateTaskCompletion} // Pass function to update "done"
          />

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
