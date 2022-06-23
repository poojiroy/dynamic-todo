import "./App.css";
import React from 'react';

function TodoLists(props) {
 
  
  return (
    <div className='todo-styles'>
      <i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}></i>
      <li>{props.text}</li>
     
    </div>
    
  )
}

export default TodoLists;