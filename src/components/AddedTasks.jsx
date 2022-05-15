import React from 'react';

import Task from "./Task";

const AddedTasks = ({todos}) => {
  return (
    <ul className='flex flex-col gap-3 w-full mb-auto overflow-y-auto h-[22rem] scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded'>
        {todos.map((todo) => {
            
            return (
                <>
                    <Task key={todo.toString()} taskLabel={todo.label} task={"Tasks"} date={todo.dateTime}/>
                
                </>


            )
        })}
    </ul>
  )
}

export default AddedTasks