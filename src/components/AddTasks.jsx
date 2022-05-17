import AddTaskForm from "./AddTaskForm"

const AddTasks = ({addTodo, hideShow, whereAt, counted}) => {
  return (
    <AddTaskForm addTodo={addTodo} hideShow={hideShow} whereAt={whereAt} counted={counted}/>
  )
}

export default AddTasks