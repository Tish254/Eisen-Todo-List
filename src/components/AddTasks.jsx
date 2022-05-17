import AddTaskForm from "./AddTaskForm"

const AddTasks = ({addTodo, formDetails, hideShow, whereAt, counted}) => {
  return (
    <AddTaskForm addTodo={addTodo} formDetails={formDetails} hideShow={hideShow} whereAt={whereAt} counted={counted}/>
  )
}

export default AddTasks