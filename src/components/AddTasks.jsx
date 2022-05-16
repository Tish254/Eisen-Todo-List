import AddTaskForm from "./AddTaskForm"

const AddTasks = ({addTodo, hideShow}) => {
  return (
    <AddTaskForm addTodo={addTodo} hideShow={hideShow}/>
  )
}

export default AddTasks