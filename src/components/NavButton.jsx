const NavButtons = ({img, btnName, taskCount, clickedNavBtn}) => {
  return (
    <div className="w-4/5 border-l-4 border-l-white hover:border-l-4 hover:border-l-violet-600 hover:rounded-l cursor-pointer" onClick={clickedNavBtn}>
        <div className="flex items-center justify-between gap-2 hover:bg-gray-200 mb-3 py-1 px-3 rounded h-full hover:rounded-l-none ">
            <div className="flex items-center gap-2">
              {img}
              <h3 className="font-semibold text-sm">{btnName}</h3>
            </div>
            <div className="bg-[#F3f2ed] py-1 px-2 rounded flex items-center justify-center font-semibold">
                <p className="text-sm">{taskCount}</p>
            </div>
        </div>
    </div>
  )
}

export default NavButtons