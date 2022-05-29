import React from 'react'
import { useState } from 'react';

const Addtodo = ({addTodo}) => {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const submit =(e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title And Description Cannot Be Empty');
        }
        addTodo(title,desc);
        settitle('');
        setdesc('');
    }
  return (
    <div className="container ">
      <h3 className="text-center my-3">Add A ToDo</h3>
      <form onSubmit={submit}>
        <div className="form-group my-2">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="desc">Description </label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => {setdesc(e.target.value)}}
            id="desc"
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default Addtodo