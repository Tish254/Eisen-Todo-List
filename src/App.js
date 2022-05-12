import NavButton from "./components/NavButton";
import Task from "./components/Task";
import AddTasks from "./components/AddTasks";


function App() {
  return (
    <div className="container mx-auto my-5 px-20 py-10 flex gap-4 justify-between w-4/5 bg-gray-300">
      <div className="w-2/5 bg-white px-8 py-8 rounded">
        <NavButton img={<i className="fa-solid fa-house text-violet-600"></i>} btnName={"Home"} taskCount={10}/>
        <NavButton img={<i className="fa-solid fa-list-check text-violet-600"></i>} btnName={"Tasks"} taskCount={10}/>
        <NavButton img={<i className="fa-regular fa-circle-check text-violet-600"></i>} btnName={"Completed"} taskCount={10}/>
        <div className="bg-violet-200 rounded h-1 mb-2"></div>
        <NavButton img={<i className="fa-solid fa-circle"></i>} btnName={"Do"} taskCount={10}/>
        <NavButton img={<i className="fa-solid fa-circle"></i>} btnName={"Schedule"} taskCount={10}/>
        <NavButton img={<i className="fa-solid fa-circle"></i>} btnName={"Delegate"} taskCount={10}/>
        <NavButton img={<i className="fa-solid fa-circle"></i>} btnName={"Delete"} taskCount={10}/>
        <NavButton img={<i className="fa-solid fa-circle-info text-violet-600"></i>} btnName={"About"} taskCount={10}/>
        
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 px-8 py-8">
        <Task taskLabel={"Walking to school"}/>
        <Task taskLabel={"Walking to school"}/>
        <Task taskLabel={"Walking to school"}/>
        <Task taskLabel={"Walking to school"}/>
        <Task taskLabel={"Walking to school"}/>
        <Task taskLabel={"Walking to school"}/>
        <div>
          <AddTasks />
        </div>
      </div>

    </div>
  )

}

export default App;