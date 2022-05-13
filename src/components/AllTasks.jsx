import Task from "./Task";
import AddTasks from "./AddTasks";
import Title from "./Title";

const AllTasks = () => {
  return (
    <div className="w-3/5 pt-10 pr-10">
        <Title title={"All Tasks"}/>
        <div className="flex flex-col items-center  gap-3 relative mt-10">
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <Task taskLabel={"Walking to school"}/>
            <AddTasks />
        </div>
      
    </div>
  )
}

export default AllTasks