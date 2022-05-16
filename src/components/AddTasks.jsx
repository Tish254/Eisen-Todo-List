import AddTaskForm from "./AddTaskForm"

const AddTasks = ({addTodo, hideShow, whereAt}) => {
  return (
    <AddTaskForm addTodo={addTodo} hideShow={hideShow} whereAt={whereAt}/>
  )
}

export default AddTasks