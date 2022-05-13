import Task from "./Task";
import AddTasks from "./AddTasks";
import Title from "./Title";

const Delegate = () => {
  return (
    <div className="w-3/5 pt-10 pr-10">
        <Title title={"Delegate"}/>
        <div className="flex flex-col items-center  gap-3 relative mt-10">
            <Task taskLabel={"Walking to school"} task={"Delegate"} date={"Monday,13,2022"}/>
            <AddTasks />
        </div>
      
    </div>
  )
}


export default Delegate