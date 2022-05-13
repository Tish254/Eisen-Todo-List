const Task = ({taskLabel, task, date}) => {
  return (
    <div className="flex justify-center flex-col bg-white rounded py-3 px-3 w-full">
        
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
              <button className="flex justify-center items-center bg-gray-300 rounded-full w-6 h-6 p-1">
                  <i className="fa-solid fa-check text-violet-600 text-base"></i>
              </button>
          
              <h4 className="text-sm">{taskLabel}</h4>
          </div>
          <div className="flex items-center gap-3">
              <i className="fa-solid fa-star text-violet-600 hover:text-red-500 text-base cursor-pointer"></i>
              <i className="fa-solid fa-list text-violet-600 hover:text-red-500 text-base cursor-pointer"></i>
          
              <i className="fa-solid fa-trash-can text-violet-600  hover:text-red-500 text-base cursor-pointer"></i>
          </div>
        </div>

        <div className="flex items-center justify-start px-9 gap-3 text-sm text-gray-500">
          <p>
            {task}
          </p>
          <p>
            {date}
          </p>
        </div>
        
        
    </div>
  )
}

export default Task