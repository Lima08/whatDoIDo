import React from 'react';
import TodoCard from '../../components/TodoCard';
import mockData from '../../mockData';
// import { useState } from "react";

// PAssar isso para o stado global da aplicação
// const [todosList, setTodosList] = useState([])
function TodoBoard() {
  return (
    <>
      {mockData.map((todo, index) => (
        <TodoCard key={index} todoList={todo} />
      ))}
    </>
  );
}

export default TodoBoard;
