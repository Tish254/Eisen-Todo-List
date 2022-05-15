import { useState } from "react"

const AddTaskForm = ({addTodo}) => {
  
  const [formInputs, setFormInputs] = useState({});

  const [reminderOn, setReminderOn] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    const id = Math.floor(Math.random() * 10000) + 1;
    
    setFormInputs(values  => ({...values, [name]: value, "id": id}))
    
    
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(formInputs);

  }

  const toggleReminder = (event) => {
    event.preventDefault();
    setReminderOn(!reminderOn);
    setFormInputs( values => ({...values, "reminder": true}));
  }


  return (
    <form className="flex flex-col gap-3 bg-white px-3 py-4 w-full rounded" onSubmit={handleSubmit}>

        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <label className="w-full">
              Enter Task:
              <input className="bg-gray-300 p-2 w-full rounded focus:outline-violet-600" type="text" 
               placeholder="Enter task name...." name="label" value= {formInputs.label || ""} onChange={handleChange}/>

            </label>
          </div>
          <div className="flex items-center gap-2 w-full">
            <label className="w-full">
              Pick Date & Set Reminder:
              <input className="bg-gray-300 p-2 w-full rounded focus:outline-violet-600 text-violet-600" type="datetime-local" placeholder="Select Date" name="dateTime" value= {formInputs.dateTime || ""} onChange={handleChange}/>

            </label>
            <button className={`self-end flex items-center justify-center h-10 w-10 rounded bg-violet-600 hover:bg-violet-700 ${reminderOn ? "outline outline-offset-2 outline-2 outline-red-600": "" }`} onClick={toggleReminder}>
              <i className="fa-solid fa-bell text-white text-xl cursor-pointer"></i>
              
            </button>
          </div>
        </div>
        <div className="flex items-center w-full">
          <label className="w-full">
            Describe your task:
            <textarea className="bg-gray-300 p-2 w-full h-[5rem] rounded focus:outline-violet-600" placeholder="Describe your task...." name="description" value= {formInputs.description || ""} onChange={handleChange}></textarea>
          </label>
        </div>
        <input className="self-start bg-violet-600 text-white rounded py-3 px-10 hover:bg-violet-700" type="submit" value="Submit" />
    </form>
  )
}

export default AddTaskForm