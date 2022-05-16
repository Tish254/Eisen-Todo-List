import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import AsideNav from "./components/AsideNav";
import Do from "./components/Do";
import Schedule from "./components/Schedule";
import Delete from "./components/Delete";
import About from "./components/About";
import AllTasks from "./components/AllTasks";
import MyDay from "./components/MyDay";
import Delegate from "./components/Delegate";
import Completed from "./components/Completed";



function App() {


  const [todos, setTodos] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);



  const baseURL = "http://localhost:5000/todos"


  useEffect(() => {

    const fetchTasks = async () => {
      const todosFromServer = await getTodos();
      setTodos(todosFromServer);
    }

    fetchTasks()
  }, [])

  // fetch Todos
  const getTodos = async () => {
    const res = await fetch(baseURL)
    const data = await res.json()

    return data;
  }


  const onAdd = async (todoValue, reminderOn, whereAt) => {

    todoValue.reminder = reminderOn;
    todoValue.whereAt = whereAt;

    console.log(todoValue);


    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todoValue)
    })

    const data = await res.json();

    
    setTodos((values) => ([...todos, data]));

  }

  const getTodo = async (id) => {
    const res = await fetch(`${baseURL}/${id}`);
    const data = await res.json();

    return data;
  }


  const  reminderTaskOn =async (id ) => {
    
    const todoToToggle = await getTodo(id);
    const updTask = {...todoToToggle, reminder: !todoToToggle.reminder}

    const res = await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'

      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    
    setTodos(todos.map((todo) => todo.id === id ? {...todo, reminder: !todo.reminder} : todo))
    

  }

  const deleteToDo = async (id) => {
    
    await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    })
    
    
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const menuClicked = () => {
    setMenuOpen(!menuOpen);
  }

  const completed = async (bool, id) => {
    
    const todoToCheck = await getTodo(id);
    
    const updCheck = !bool ? {...todoToCheck, completedTask: !bool, whereAt: "completed"}: {...todoToCheck, completedTask: !bool, whereAt: "alltasks"};
    
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updCheck)

    })
    
    setTodos(todos.map((todo) => todo.id === id ? {...todo, ...updCheck} : todo));
    

  }

  const filterData = (data, key) => {
      return data.filter((dataValue) => dataValue.whereAt === key);

  }

  return (
    <Router>
      <div className=" relative mx-auto my-5 px-4 md:px-2 py-2 flex justify-center md:justify-start gap-10 md:w-[80%] w-[100%] bg-gray-300 rounded
        ">

          <AsideNav style={"hidden md:flex md:flex-col md:items-center w-[30%] bg-white pt-8 pb-12 rounded"}/>
          {menuOpen && <AsideNav style={"md:hidden flex flex-col items-center left-0 top-[7rem] bottom-20 z-10 absolute bg-white pt-8 pb-12 opacity-90 rounded w-full"}/>}

        <Routes>
            
            <Route path="/" element={<MyDay todos={filterData(todos, "myday")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked}  completed={completed}/>}/>
            
            <Route path="/alltasks" element={<AllTasks todos={filterData(todos, "alltasks")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            <Route path="/completed" element={<Completed todos={filterData(todos, "completed")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            
            <Route path="/do" element={<Do todos={filterData(todos, "do")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            
            <Route path="/schedule" element={<Schedule todos={filterData(todos, "schedule")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            
            <Route path="/delegate" element={<Delegate todos={filterData(todos, "delegate")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            
            <Route path="/delete" element={<Delete todos={filterData(todos, "delete")} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed}/>}/>

            
            <Route path="/about" element={<About menuClicked={menuClicked}/>}/>

        </Routes>
        
        
      </div>
    </Router>
  )

}

export default App;