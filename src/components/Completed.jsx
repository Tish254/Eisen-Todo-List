import Title from "./Title";
import AddedTasks from "./AddedTasks";


const Completed = ({todos, addTodo, remind, deleteToDo, menuClicked, completed, counted}) => {
    
    
  return (
    <div className="flex flex-col justify-between md:w-3/5 w-full pt-3 pb-10 gap-4">
        <Title title={"Completed"} menuClicked={menuClicked}/>
        <div className="flex flex-col items-center justify-center  gap-5 relative overflow-y-auto h-[22rem] scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded">
            <AddedTasks todos={todos} remind={remind} deleteToDo={deleteToDo} completed={completed} counted={counted}/>
            
        </div>
      
    </div>
  )
}

export default Completed