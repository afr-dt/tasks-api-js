import React from 'react';

const ListItem = ({ title, isDone }) => {
  return (
    <li
      className={`list-group-item  
        ${isDone ? 'bg-success' : 'bg-danger'}
        text-white 
        mt-2 d-flex 
        justify-content-center 
        align-items-center`}
    >
      <h5>{title}</h5>
    </li>
  );
};

export default ListItem;
