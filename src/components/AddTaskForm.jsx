const AddTaskForm = () => {
  return (
    <form className="flex items-center justify-between bg-white px-3 py-4 w-full rounded">

        <input className="bg-gray-300 p-2 w-4/5 rounded" type="text" placeholder="Enter task name...."/>
        <div className="flex items-center gap-3">
            <i className="fa-solid fa-bell text-violet-600 text-xl"></i>
            <i className="fa-solid fa-calendar text-violet-600 text-xl"></i>
            <i className="fa-solid fa-plus text-violet-600 text-xl"></i>
            
        </div>
    </form>
  )
}

export default AddTaskForm