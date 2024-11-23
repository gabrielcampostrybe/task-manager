"use client";
import React, { useState } from "react";

interface NewTaskModalProps {
  onAdd: (taskName: string) => void;
  onClose: () => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ onAdd, onClose }) => {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (taskName.trim() === "") {
      alert("Digite um nome para a tarefa");
      return;
    }
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="new-task-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalTitle">Nova Tarefa</h2>
        <label className="taskTitle" htmlFor="taskName">
          Título
        </label>
        <input
          className="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Digite"
        />
        <div className="modalBtn">
          <button className="addBtn" onClick={handleAdd}>
            Adicionar
          </button>
          <button className="cancelBtn" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
