import {useState} from 'react';

import Title from './Title'


const GoogleCalendar = ({todos, addTodo, remind, deleteToDo, menuClicked, completed, counted, formDetails}) => {
    
    const [showForm, setShowForm ] = useState(false);
    

    const togglePopup = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    }

    

  return (
    <div className="flex flex-col justify-between md:w-3/5 w-full pt-3 pb-10 gap-4">
        <Title title={"Google Events"} menuClicked={menuClicked} />
        <div className="flex flex-col items-center justify-center  gap-5 relative overflow-y-auto h-[22rem] scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded">
             
        </div>
      
    </div>
  )
}

export default GoogleCalendar