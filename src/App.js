import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import NavButton from "./components/NavButton";
import Task from "./components/Task";
import AddTasks from "./components/AddTasks";
import Title from "./components/Title";



function App() {

  const [activeNav, setActiveNav] = useState(false);
  
  const switchTasks = () => {

      setActiveNav(prevState => !prevState);
      
      return;
  }
  
  return (
    <Router>
      <div className="container mx-auto my-5 px-2 py-2 flex gap-10 w-4/5 bg-gray-300 rounded h-[90vh]
        ">
        <div className="flex flex-col items-center w-2/5 bg-white px-8 pt-8 pb-12 rounded">
          <NavButton state={activeNav} img={<i className="fa-solid fa-house text-violet-600 text-base font-bold"></i>} btnName={"My Day"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-solid fa-list-check text-violet-600 text-base font-bold"></i>} btnName={"Tasks"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-regular fa-circle-check text-violet-600 text-base font-bold"></i>} btnName={"Completed"} taskCount={10} clickedNavBtn={switchTasks}/>
          <div className="bg-violet-200 rounded h-[.1rem] mb-2"></div>
          <NavButton img={<i className="fa-solid fa-circle text-base font-bold text-[#0CC078]"></i>} btnName={"Do"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-solid fa-circle text-base font-bold text-[#FCFC99]"></i>} btnName={"Schedule"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-solid fa-circle text-base font-bold text-[#A8E4EF]"></i>} btnName={"Delegate"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-solid fa-circle text-base font-bold text-[#FB6962]"></i>} btnName={"Delete"} taskCount={10} clickedNavBtn={switchTasks}/>
          <NavButton img={<i className="fa-solid fa-circle-info text-violet-600 text-base font-bold"></i>} btnName={"About"} taskCount={10} clickedNavBtn={switchTasks}/>
      
        </div>
        <div className="w-3/5 pt-10 pr-10">
          <Title title={"My Day"}/>
          <div className="flex flex-col items-center  gap-3 relative mt-10">
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <AddTasks />
      
          </div>
        </div>
      </div>
    </Router>
  )

}

export default App;