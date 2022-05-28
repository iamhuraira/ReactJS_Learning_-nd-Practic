
import React from 'react';
import Header from './components/Header';
import Task from './components/Task';
import "./index.css";
import { useState } from 'react';


function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: 'Dr Appointment',
      day: '29 May At 5:00PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting Appointment',
      day: '30 May At 5:00PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Office Interview Appointment',
      day: '1 May At 5:00PM',
      reminder: true,
    },
  ]);

  // Delete Task Function 
  const deleteTask = (id)=> {
    setTask(task.filter((task)=>task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {task.length > 0 ? <Task task={task}  onDelete= {deleteTask} /> : 'No Task'}
    </div>
  );
}


// Class Based Component
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Huraira</h1>
//         <Header />
//       </div>
//     );
//   }
// }
export default App;
