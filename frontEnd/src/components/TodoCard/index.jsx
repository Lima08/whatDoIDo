import React from 'react';

function TodoCard({ todoList }) {
const {title, date, status, description} = todoList;

  return (
    // No clicar nessa div o usuario será direcionado para a tele de nova tarefa.
    <div>
      <p>{date}</p>
      <p>{status}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>X</button>
    </div>
  );
}

export default TodoCard;
