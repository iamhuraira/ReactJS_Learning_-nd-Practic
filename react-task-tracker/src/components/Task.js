// import { useState } from "react";
import Taskcom from "./Taskcom"



// import React from 'react'
// const task = [
//   {
//     id: 1,
//     text: 'Dr Appointment',
//     day: '29 May At 5:00PM',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting Appointment',
//     day: '30 May At 5:00PM',
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: 'Office Interview Appointment',
//     day: '1 May At 5:00PM',
//     reminder: true,
//   }
// ]

const Task = ({ task, onDelete }) => {
  // const [task, setTask] = useState([

  //         {
  //             id: 1,
  //             text: 'Dr Appointment',
  //             day: '29 May At 5:00PM',
  //             reminder: true,
  //         },
  //         {
  //             id: 2,
  //             text: 'Meeting Appointment',
  //             day: '30 May At 5:00PM',
  //             reminder: true,
  //         },
  //         {
  //             id: 3,
  //             text: 'Office Interview Appointment',
  //             day: '1 May At 5:00PM',
  //             reminder: true,
  //         }

  // ])
  return (
    <div>
      {task.map((task) => (
        <Taskcom key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Task