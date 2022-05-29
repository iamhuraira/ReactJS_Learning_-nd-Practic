import Header from './components/Header';
import  Footer  from './components/Footer';
import  Todos  from './components/Todos';
import Addtodo from './components/Addtodo';
import { useState , useEffect} from 'react';


import './App.css';
 
function App() {
  let initTodo;
    if(localStorage.getItem('todos')===null){
      initTodo=[];
    }else{
      initTodo = JSON.parse(localStorage.getItem('todos'));
    }
    const [todos, setTodos] = useState(initTodo);
    
    
  //   const [todos, setTodos] = useState( [
  //   {
  //     sno: 1,
  //     title: 'Go To Market',
  //     desc: 'go to the Market to buy Some things for This job done ',
  //   },
  //   {
  //     sno: 2,
  //     title: 'Go To Shop',
  //     desc: 'go to the Market to buy Some things for This job done ',
  //   },
  //   {
  //     sno: 3,
  //     title: 'Go To Interview',
  //     desc: 'go to the Market to buy Some things for This job done ',
  //   },
  // ]);
  
  const ondelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  };

  const addTodo = (title, desc)=>{
    // console.log('Add TODO', title, desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title :title,
      desc: desc,
    }
    // console.log(myTodo);
    setTodos([...todos,myTodo]);

   
  }
   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

  return (
    
    <div>
      <Header title="MyToDoList" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer />
    </div>
  );
}

export default App;
