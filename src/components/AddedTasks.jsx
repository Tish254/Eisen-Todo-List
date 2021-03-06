import React from 'react';

import Task from "./Task";

const AddedTasks = ({todos, remind, deleteToDo, completed, counted, hideShow, formDetails}) => {
  return (
    <ul className='flex flex-col gap-3 w-full mb-auto pr-[1rem] h-full'>
        {todos.map((todo) => {
            
            return (

              <Task key={todo.id} taskLabel={todo.label} date={todo.dateTime} reminder={todo.reminder} remind={remind} id={todo.id} deleteToDo={deleteToDo} completed={completed} markedCompleted = {todo.completedTask} whereAt={todo.whereAt} counted={counted} hideShow={hideShow} formDetails={formDetails} description={todo.description}/>
    


            )
        })}
    </ul>
  )
}

export default AddedTasks