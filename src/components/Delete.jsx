import { useState } from "react";


import AddTasks from "./AddTasks";
import Title from "./Title";
import AddedTasks from "./AddedTasks";


const Delete = ({todos, addTodo}) => {
    const [showForm, setShowForm ] = useState(false);
    
    const togglePopup = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    }

    
    
  return (
    <div className="flex flex-col justify-between md:w-3/5 w-full pt-10 pb-10 gap-4">
        <Title title={"Delete"}/>
        <div className="flex flex-col items-center justify-center  gap-5 relative">
            {!showForm && <AddedTasks todos={todos}/>}

            {showForm && <AddTasks addTodo={addTodo} />}
            
        </div>
        <button className="self-end flex items-center justify-center h-14 w-14 rounded-full bg-violet-600 hover:bg-violet-700 -mb-9" onClick={e => togglePopup(e)}> 
            <i className={!showForm ? "fa-solid fa-plus text-white text-xl cursor-pointer" : "fa-solid fa-minus text-white text-xl cursor-pointer"}></i>
        </button>
      
    </div>
  )
}

export default Delete