import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavButton from "./components/NavButton";
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
  const [error, setError] = useState(null);


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


  const onAdd = async (todoValue, reminderOn) => {

    todoValue.reminder = reminderOn


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

  return (
    <Router>
      <div className=" mx-auto my-5 px-4 md:px-2 py-2 flex justify-center md:justify-start gap-10 md:w-[80%] w-[100%] bg-gray-300 rounded
        ">
        <div className="hidden md:flex flex-col items-center w-[30%] bg-white pt-8 pb-12 rounded overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded">
          <NavButton path="/"  img={<i className="fa-solid fa-house text-violet-600 text-base font-bold"></i>} btnName={"My Day"} taskCount={10}/>
          <NavButton path="/alltasks"  img={<i className="fa-solid fa-list-check text-violet-600 text-base font-bold"></i>} btnName={"Tasks"} taskCount={10}/>
          <NavButton path="/completed"  img={<i className="fa-regular fa-circle-check text-violet-600 text-base font-bold"></i>} btnName={"Completed"} taskCount={10}/>
          <div className="bg-violet-200 rounded h-[.1rem] mb-2"></div>
          <NavButton path="/do"  img={<i className="fa-solid fa-circle text-base font-bold text-[#0CC078]"></i>} btnName={"Do"} taskCount={10}/>
          <NavButton path="/schedule"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FCFC99]"></i>} btnName={"Schedule"} taskCount={10}/>
          <NavButton path="/delegate"  img={<i className="fa-solid fa-circle text-base font-bold text-[#A8E4EF]"></i>} btnName={"Delegate"} taskCount={10}/>
          <NavButton path="/delete"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FB6962]"></i>} btnName={"Delete"} taskCount={10}/>
          <NavButton path="/about"   img={<i className="fa-solid fa-circle-info text-violet-600 text-base font-bold"></i>} btnName={"About"} taskCount={10}/>
      
        </div>

        <Routes>
            
            <Route path="/" element={<MyDay todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>
            
            <Route path="/alltasks" element={<AllTasks todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            <Route path="/completed" element={<Completed todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            
            <Route path="/do" element={<Do todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            
            <Route path="/schedule" element={<Schedule todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            
            <Route path="/delegate" element={<Delegate todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            
            <Route path="/delete" element={<Delete todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

            
            <Route path="/about" element={<About todos={todos} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo}/>}/>

        </Routes>

        
        
      </div>
    </Router>
  )

}

export default App;