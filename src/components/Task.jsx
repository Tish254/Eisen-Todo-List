import { useState } from "react";
import FormatDate from "./FormatDate";

const Task = ({taskLabel, date, reminder, remind, id, deleteToDo, completed, markedCompleted, whereAt, counted}) => {

  const [checked, setChecked] = useState(false);
  

  const reminderClicked = () => {
    remind(id);
    
  }
  
  return (
    <li className={`flex justify-center flex-col bg-white rounded py-3 px-5 w-full ${reminder ?  "border-l-4 border-l-red-500" : ""}`}>
        
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
              <button className="flex justify-center items-center bg-gray-300 rounded-full w-6 h-6 p-1" onClick={() => {
                setChecked(prev => !prev)

                completed(whereAt === "completed" ? true: checked, id, whereAt)

              
              }}>
                  <i className={`${markedCompleted ? "fa-solid fa-check" : ""} text-violet-600 text-base`}></i>
              </button>
          
              <h4 className={`${markedCompleted ? "line-through" : ""} text-sm`}>{taskLabel}</h4>
          </div>
          <div className="flex items-center gap-4">
              <i className="fa-solid fa-bell text-violet-600 hover:text-red-500 text-lg cursor-pointer" onClick={reminderClicked}></i>
          
              <i className="fa-solid fa-trash-can text-violet-600  hover:text-red-500 text-lg cursor-pointer" onClick={() => deleteToDo(id)}></i>
          </div>
        </div>

        <div className="flex items-center justify-start px-9 gap-3 text-[.7rem] text-gray-500">
          <p>
            { whereAt}
          </p>
          <p>
            <FormatDate dateValue={date} />
          </p>
        </div>
        
    </li>
  )
}

export default Task