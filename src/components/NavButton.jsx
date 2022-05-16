import { NavLink } from "react-router-dom"

const NavButtons = ({path, img, btnName, taskCount}) => {

  const activeClassName = `mb-1 w-4/5 border-l-4 rounded bg-gray-200 hover:bg-gray-300 hover:border-l-4 border-l-violet-600 hover:border-l-violet-600 hover:rounded-l cursor-pointer ${btnName === "About" ? "mt-auto" : ""}`
  const inactiveClassName = `mb-1 w-4/5 border-l-4 rounded hover:bg-gray-200 hover:border-l-4 border-l-white hover:border-l-violet-600 hover:rounded-l cursor-pointer ${btnName === "About" ? "mt-auto" : ""}`
  
  return (
    <NavLink to={path} className={({isActive}) => (isActive ? activeClassName: inactiveClassName )}>
        <div className="flex items-center justify-between gap-2 mb-3 py-1 px-3 rounded h-full hover:rounded-l-none ">
            <div className="flex items-center gap-2">
              {img}
              <h3 className="font-semibold text-sm">{btnName}</h3>
            </div>

            {btnName !== "About" && <div className="bg-[#F3f2ed] py-1 px-2 rounded flex items-center justify-center font-semibold">
                <p className="text-sm">{taskCount}</p>
            </div>}
        </div>
    </NavLink>
  )
}


export default NavButtons