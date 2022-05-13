import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  
  return (
    <Router>
      <div className="container mx-auto my-5 px-2 py-2 flex gap-10 w-[80%] bg-gray-300 rounded h-[90vh]
        ">
        <div className="flex flex-col items-center w-[30%] bg-white pt-8 pb-12 rounded overflow-y-auto overflow-x-hidden">
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
            
            <Route path="/" element={<MyDay/>}/>
            
            <Route path="/alltasks" element={<AllTasks/>}/>

            <Route path="/completed" element={<Completed/>}/>

            
            <Route path="/do" element={<Do/>}/>

            
            <Route path="/schedule" element={<Schedule/>}/>

            
            <Route path="/delegate" element={<Delegate/>}/>

            
            <Route path="/delete" element={<Delete/>}/>

            
            <Route path="/about" element={<About/>}/>

        </Routes>

        
        
      </div>
    </Router>
  )

}

export default App;