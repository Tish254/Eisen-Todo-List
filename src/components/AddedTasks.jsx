import React from 'react';

import Task from "./Task";

const AddedTasks = ({todos, remind, deleteToDo}) => {
  return (
    <ul className='flex flex-col gap-3 w-full mb-auto pr-[1rem] h-full'>
        {todos.map((todo) => {
            
            return (
                <>
                    <Task key={todo.id} taskLabel={todo.label} task={"Tasks"} date={todo.dateTime} reminder={todo.reminder} remind={remind} id={todo.id} deleteToDo={deleteToDo}/>
    
                </>


            )
        })}
    </ul>
  )
}

export default AddedTasks