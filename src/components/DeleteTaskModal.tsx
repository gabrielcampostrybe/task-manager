"use client";
import React from "react";

interface DeleteTaskModalProps {
  onDelete: () => void;
  onClose: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  onDelete,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="delete-task-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Deletar Tarefa</h2>
        <p className="delete-text">
          Tem certeza que você deseja deletar essa tarefa?
        </p>
        <div className="modalBtn">
          <button className="deleteBtn" onClick={onDelete}>
            Deletar
          </button>
          <button className="cancelBtn" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
