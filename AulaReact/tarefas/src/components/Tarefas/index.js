import React from 'react';
import PropTypes from 'prop-types';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return(
    <ul className="tarefas">
    {tarefas.map((tarefa, index) => (
    <li key={tarefa}>
      {tarefa}
      <span>
        <button
          onClick = { (e) => handleEdit(e, index)}
          className="edit">
          Check
        </button>
        <button
          onClick = { (e) => handleDelete(e, index)}
          className="delete">
          Delete
        </button>
      </span>
    </li>
    ))}
    </ul>
  );
}
Tarefas.PropTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,

}

