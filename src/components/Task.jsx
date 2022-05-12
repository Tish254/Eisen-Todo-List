const Task = ({taskLabel}) => {
  return (
    <div className="flex items-center">
        
        <div className="flex items-center">
            <button className="flex justify-center items-center bg-violet-600 rounded-full w-7 h-7 p-1">
                <i className="fa-solid fa-check text-white"></i>
            </button>
            
            <h4>{taskLabel}</h4>
        </div>

        <div className="flex items-center">
            <i className="fa-solid fa-star text-violet-600"></i>

            <i className="fa-solid fa-list text-violet-600"></i>
            
            <i className="fa-solid fa-trash-can text-violet-600"></i>

        </div>
        
        
    </div>
  )
}

export default Task