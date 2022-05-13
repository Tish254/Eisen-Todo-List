const Task = ({taskLabel}) => {
  return (
    <div className="flex items-center w-full justify-between bg-white rounded py-3 px-3">
        
        <div className="flex items-center gap-3">
            <button className="flex justify-center items-center bg-violet-600 rounded-full w-5 h-5 p-1">
                <i className="fa-solid fa-check text-white text-base"></i>
            </button>
            
            <h4 className="text-sm">{taskLabel}</h4>
        </div>

        <div className="flex items-center gap-3">
            <i className="fa-solid fa-star text-violet-600 text-base"></i>

            <i className="fa-solid fa-list text-violet-600 text-base"></i>
            
            <i className="fa-solid fa-trash-can text-violet-600 text-base"></i>

        </div>
        
        
    </div>
  )
}

export default Task