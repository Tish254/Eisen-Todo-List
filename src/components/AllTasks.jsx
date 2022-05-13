import { useState } from "react";

import Task from "./Task";
import AddTasks from "./AddTasks";
import Title from "./Title";

const AllTasks = () => {
    const [showForm, setShowForm ] = useState(false);
    
    const togglePopup = () => {
        setShowForm(!showForm);
    }

    
    
  return (
    <div className="flex flex-col justify-between w-3/5 pt-10 pr-10 pb-10">
        <Title title={"All Tasks"}/>
        <div className="flex flex-col items-center  gap-3 relative mt-10 mb-auto">
            <Task taskLabel={"Walking to school"} task={"All Tasks"} date={"Monday,13,2022"}/>

            {showForm && <AddTasks isShow={showForm}/>}
            
        </div>
        <div className="self-end flex items-center justify-center h-14 w-14 rounded-full bg-violet-600" onClick={togglePopup}> 
            <i className="fa-solid fa-plus text-white hover:text-red-500 text-xl cursor-pointer"></i>
        </div>
      
    </div>
  )
}

export default AllTasks