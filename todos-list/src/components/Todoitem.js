import React from 'react'

const Todoitem = ({todo , ondelete, key}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todoitem
