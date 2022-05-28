import Header from './components/Header';
import  Footer  from './components/Footer';
import  Todos  from './components/Todos';
import { useState } from 'react';


import './App.css';
 
function App() {
  
  const [todos, setTodos] = useState( [
    {
      sno: 1,
      title: 'Go To Market',
      desc: 'go to the Market to buy Some things for This job done ',
    },
    {
      sno: 2,
      title: 'Go To Shop',
      desc: 'go to the Market to buy Some things for This job done ',
    },
    {
      sno: 3,
      title: 'Go To Interview',
      desc: 'go to the Market to buy Some things for This job done ',
    },
  ]);
  
  const ondelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  };

  return (
    
    <div>
      <Header title="MyToDoList" />
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer />
    </div>
  );
}

export default App;
