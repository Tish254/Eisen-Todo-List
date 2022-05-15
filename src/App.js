import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

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

  const [added, setAdded] = useState([]);

  const [todos, setTodos] = useState([
    {
      "id": "gh47kj",
      "label": "Walking to School",
      "reminder": true,
      "dateTime": "2022-05-12T16:56",
      "description": "To day is school day i will go to school and learn",
      "list": [
          "completed",
          "do",
      ]
    },
    {
      "id": "gh6793",
      "label": "Jumping",
      "reminder": false,
      "dateTime": "2022-05-12T16:56",
      "description": "Today is exercice day i will exercise",
      "list": [
        "completed",
        "schedule"
    ]
    },

  ])

  const onAdd = (todoValue) => {


    
    setTodos((values) => ([...values, todoValue]));

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
            
            <Route path="/" element={<MyDay todos={todos} addTodo={onAdd}/>}/>
            
            <Route path="/alltasks" element={<AllTasks todos={todos} addTodo={onAdd}/>}/>

            <Route path="/completed" element={<Completed todos={todos} addTodo={onAdd}/>}/>

            
            <Route path="/do" element={<Do todos={todos} addTodo={onAdd}/>}/>

            
            <Route path="/schedule" element={<Schedule todos={todos} addTodo={onAdd}/>}/>

            
            <Route path="/delegate" element={<Delegate todos={todos} addTodo={onAdd}/>}/>

            
            <Route path="/delete" element={<Delete todos={todos} addTodo={onAdd}/>}/>

            
            <Route path="/about" element={<About todos={todos} addTodo={onAdd}/>}/>

        </Routes>

        
        
      </div>
    </Router>
  )

}

export default App;