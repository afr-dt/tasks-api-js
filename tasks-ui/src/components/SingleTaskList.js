import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleTaskList = ({ title, isDone, onEdit, id, history }) => {
  return (
    <div className={`card ${isDone ? 'bg-success' : 'bg-danger'} text-white`}>
      <div className="card-block">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-text">
          {isDone ? 'Tarea completada 😃' : 'No has hecho esta tarea 😔'}
        </div>
        <div className="d-flex justify-content-between align-items-end mt-3">
          <button
            className="btn btn-link text-white"
            onClick={() => {
              axios
                .delete(`http://localhost:8000/api/v1/task/${id}`)
                .then(() => {
                  history.push('/');
                });
            }}
          >
            Eliminar
          </button>
          <button className="btn btn-link text-white" onClick={onEdit}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleTaskList);
