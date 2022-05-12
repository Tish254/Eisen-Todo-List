const NavButtons = ({img, btnName, taskCount}) => {
  return (
    <div>
        <div className="flex items-center justify-between gap-2 bg-gray-200 mb-3 py-2 px-2 rounded">
            <div className="flex items-center gap-2">
              {img}
              <h3>{btnName}</h3>
            </div>
            <div>
                <p>{taskCount}</p>
            </div>
        </div>
    </div>
  )
}

export default NavButtons