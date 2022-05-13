const AddTaskForm = ({isShow}) => {
  const showClass = "flex flex-col gap-3 bg-white px-3 py-4 w-full rounded";
  const hideClass = "hidden flex-col gap-3 bg-white px-3 py-4 w-full rounded"
  
  return (
    <form className={(isShow) => isShow ? showClass: hideClass}>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 w-full">
              <input className="bg-gray-300 p-2 w-full rounded focus:outline-violet-600" type="text" placeholder="Enter task name...."/>
          </div>
          <div className="flex items-center gap-2 w-full">
            <input className="bg-gray-300 p-2 w-full rounded focus:outline-violet-600" type="text" placeholder="Enter task name...."/>
            <i className="fa-solid fa-calendar text-violet-600 hover:text-red-500 text-xl cursor-pointer"></i>
            <i className="fa-solid fa-bell text-violet-600 hover:text-red-500 text-xl cursor-pointer"></i>
          </div>
        </div>
        <div className="flex items-center w-full">
          <textarea className="bg-gray-300 p-2 w-full h-[10rem] rounded focus:outline-violet-600" placeholder="Describe your task...."></textarea>
        </div>
    </form>
  )
}

export default AddTaskForm