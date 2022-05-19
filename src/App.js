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
import GoogleCalendar from "./components/GoogleCalendar";
import GoogleApi from "./components/GoogleApi";


function App() {


  const [todos, setTodos] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formInputs, setFormInputs] = useState({});
  const [countedTasks, setCountedTasks] = useState({});

  let myObjOfCounts = {};



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

  const updateToDo = async (taskUpdate) => {

    const toUpdate = {"label": taskUpdate.label, "dateTime": taskUpdate.dateTime, "description": taskUpdate.description,"reminder": taskUpdate.reminder}

    await fetch(`${baseURL}/${taskUpdate.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json"

      },
      body: JSON.stringify(toUpdate)
    })
    
    setTodos(todos.map((todo) => todo.id === taskUpdate.id ? {...todo, ...toUpdate} : todo))

  }


  const onAdd = async (todoValue, whereAt) => {

    if (todoValue.whereAt === `edit${whereAt}`) {
      await updateToDo(todoValue);
      return;
    }

    todoValue.whereAt = whereAt;
    setCountedTasks(prevCounts => ({...prevCounts, [whereAt]: countedTasks[whereAt] + 1}))

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

    await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'

      },
      body: JSON.stringify(updTask)
    })
    
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

  const completed = async (bool, id, whereAt) => {

    if (whereAt === "completed") {
      setCountedTasks(prevCounts => ({...prevCounts, [whereAt]: countedTasks[whereAt] - 1 , alltasks: countedTasks["alltasks"] + 1}))
      
    }

    setCountedTasks(prevCounts => ({...prevCounts, [whereAt]: countedTasks[whereAt] - 1, completed: countedTasks["completed"] + 1 }))

    
    const todoToCheck = await getTodo(id);
    
    const updCheck = !bool ? {...todoToCheck, completedTask: !bool, whereAt: "completed"}: {...todoToCheck, completedTask: !bool, whereAt: "alltasks"};
    
    await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updCheck)

    })
    
    setTodos(todos.map((todo) => todo.id === id ? {...todo, ...updCheck} : todo));
    

  }

  const filterDataCount = (data, key) => {

      let dataArrr = data.filter((dataValue) => dataValue.whereAt === key);

      myObjOfCounts[key] = dataArrr.length;
      

      return dataArrr 

  }

  const setAllCounts = () => {
    setCountedTasks(prevCounts  => ({...prevCounts, ...myObjOfCounts})) 
    
  }

  const filteDataMyday = filterDataCount(todos, "myday");
  const filteDataAlltasks = filterDataCount(todos, "alltasks");
  const filteDataCompleted = filterDataCount(todos, "completed");
  const filteDataGoogle = filterDataCount(todos, "google")
  const filteDataDo = filterDataCount(todos, "do");
  const filteDataSchedule = filterDataCount(todos, "schedule");
  const filteDataDelegate = filterDataCount(todos, "delegate");
  const filteDataDelete = filterDataCount(todos, "delete");


  useEffect(() => {
    
    setAllCounts(); // eslint-disable-next-line
   }, [])

  return (
    <Router>
      <div className=" relative mx-auto my-5 px-4 md:px-2 py-2 flex justify-center md:justify-start gap-10 md:w-[80%] w-[100%] bg-gray-300 rounded
        ">
        <GoogleApi isLoggedIn={loggedIn} setIsLoggedIn={setLoggedIn}/>

        {loggedIn &&
        <AsideNav styler={"hidden md:flex md:flex-col md:items-center w-[30%] bg-white pt-8 pb-12 rounded"} counted={myObjOfCounts}/>}

        {loggedIn && menuOpen &&
        <AsideNav styler={"md:hidden flex flex-col items-center left-0 top-[7rem] bottom-20 z-10 absolute bg-white pt-8 pb-12 opacity-90 rounded w-full"} counted={myObjOfCounts}/>}

        {loggedIn &&
        
        <Routes>
            
            <Route path="/" element={<MyDay todos={filteDataMyday} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked}  completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>
            
            <Route path="/alltasks" element={<AllTasks todos={filteDataAlltasks} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            <Route path="/completed" element={<Completed todos={filteDataCompleted} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            <Route path="/google_calendar" element={<GoogleCalendar todos={filteDataGoogle} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            
            <Route path="/do" element={<Do todos={filteDataDo} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            
            <Route path="/schedule" element={<Schedule todos={filteDataSchedule} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            
            <Route path="/delegate" element={<Delegate todos={filteDataDelegate} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            
            <Route path="/delete" element={<Delete todos={filteDataDelete} addTodo={onAdd} remind={reminderTaskOn} deleteToDo={deleteToDo} menuClicked={menuClicked} completed={completed} counted={[myObjOfCounts, setCountedTasks]} formDetails={[formInputs, setFormInputs]}/>}/>

            
            <Route path="/about" element={<About menuClicked={menuClicked}/>}/>

        </Routes> }
        
        
      </div>
    </Router>
  )

}

export default App;