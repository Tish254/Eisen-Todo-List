import NavButton from "./NavButton";

const AsideNav = ({styler, counted, userCredentials, setIsLoggedIn}) => {
  const logoutClicked = () => {
    window.google.accounts.id.disableAutoSelect();
    setIsLoggedIn(false);

  }

  return (
    <>
        <div className={`${styler} overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded`}>
          <div className="flex gap-4 items-center mb-2 border border-1 border-violet-600 rounded-lg  self-start pr-5 md:pr-2 w-full justify-between">
            <div className="flex items-center gap-2">
              <img className="w-[3rem] h-[3rem] rounded-l-lg" src={userCredentials.picture} alt="profile"/>
              <p className="capitalize font-bold">{userCredentials.name}</p>
            </div>
                
            <button className=" bg-violet-600 hover:bg-violet-700 text-white rounded px-4 py-1 font-medium justify-end" onClick={logoutClicked}>
                Logout
            </button>
          </div>

          <NavButton path="/Eisen-Todo-List"  img={<i className="fa-solid fa-house text-violet-600 text-base font-bold"></i>} btnName={"My Day"} taskCount={counted.myday}/>

          <NavButton path="/Eisen-Todo-List/alltasks"  img={<i className="fa-solid fa-list-check text-violet-600 text-base font-bold"></i>} btnName={"Tasks"} taskCount={counted.alltasks}/>

          <NavButton path="/Eisen-Todo-List/completed"  img={<i className="fa-regular fa-circle-check text-violet-600 text-base font-bold"></i>} btnName={"Completed"} taskCount={counted.completed}/>

          <NavButton path="/Eisen-Todo-List/google_calendar"  img={<i className="fa-solid fa-calendar-days text-violet-600 text-base font-bold"></i>} btnName={"G-Calendar"} taskCount={counted.delete}/>

          <NavButton path="/Eisen-Todo-List/do"  img={<i className="fa-solid fa-circle text-base font-bold text-[#0CC078]"></i>} btnName={"Do It "} taskCount={counted.do}/>

          <NavButton path="/Eisen-Todo-List/schedule"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FCFC99]"></i>} btnName={"Schedule It"} taskCount={counted.schedule}/>

          <NavButton path="/Eisen-Todo-List/delegate"  img={<i className="fa-solid fa-circle text-base font-bold text-[#A8E4EF]"></i>} btnName={"Delegate It"} taskCount={counted.delegate}/>

          <NavButton path="/Eisen-Todo-List/delete"  img={<i className="fa-solid fa-circle text-base font-bold text-[#FB6962]"></i>} btnName={"Delete It"} taskCount={counted.delete}/>

          <NavButton path="/Eisen-Todo-List/about"   img={<i className="fa-solid fa-circle-info text-violet-600 text-base font-bold"></i>} btnName={"About"}/>
          
      
        </div>
    </>
  )
}

export default AsideNav