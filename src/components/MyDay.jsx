import Task from "./Task";
import AddTasks from "./AddTasks";
import Title from "./Title";

const MyDay = () => {
  return (
    <div className="flex flex-col justify-between w-3/5 pt-10 pr-10 pb-10">
        <Title title={"My Day"}/>
        <div className="flex flex-col items-center  gap-3 relative mt-10 mb-auto">
            <Task taskLabel={"Walking to school"} task={"My Day"} date={"Monday,13,2022"}/>
            <AddTasks />
        </div>
        <div className="self-end flex items-center justify-center h-14 w-14 rounded-full bg-violet-600"> 
            <i className="fa-solid fa-plus text-white hover:text-red-500 text-xl cursor-pointer"></i>
        </div>
      
    </div>
  )
}

export default MyDay