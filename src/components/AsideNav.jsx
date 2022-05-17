import NavButton from "./NavButton";

const AsideNav = ({styler, counted}) => {
  return (
    <>
        <div className={`${styler} overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded`}>
          

          <NavButton path="/"  img={<i className="fa-solid fa-house text-violet-600 text-base font-bold"></i>} btnName={"My Day"} taskCount={counted.myday}/>
          <NavButton path="/alltasks"  img={<i className="fa-solid fa-list-check text-violet-600 text-base font-bold"></i>} btnName={"Tasks"} taskCount={counted.alltasks}/>
          <NavButton path="/completed"  img={<i className="fa-regular fa-circle-check text-violet-600 text-base font-bold"></i>} btnName={"Completed"} taskCount={counted.completed}/>
          <div className="bg-violet-200 rounded h-[.1rem] mb-2"></div>
          <NavButton path="/do"  img={<i className="fa-solid fa-circle text-base font-bold text-[#0CC078]"></i>} btnName={"Do It "} taskCount={counted.do}/>
          <NavButton path="/schedule"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FCFC99]"></i>} btnName={"Schedule It"} taskCount={counted.schedule}/>
          <NavButton path="/delegate"  img={<i className="fa-solid fa-circle text-base font-bold text-[#A8E4EF]"></i>} btnName={"Delegate It"} taskCount={counted.delegate}/>
          <NavButton path="/delete"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FB6962]"></i>} btnName={"Delete It"} taskCount={counted.delete}/>
          <NavButton path="/about"   img={<i className="fa-solid fa-circle-info text-violet-600 text-base font-bold"></i>} btnName={"About"}/>
      
        </div>
    </>
  )
}

export default AsideNav