import React from 'react'
import Todoitem from './Todoitem';

const Todos = ({ todos, ondelete }) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List </h3>
      {todos.length===0 ? 
      "No Todos To Display" : 
      todos.map((todo) => {
        return <Todoitem todo={todo} key={todo.sno} ondelete={ondelete} />;
      })
       }
    </div>
  );
};

export default Todos