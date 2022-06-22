import "./App.css";
import React, { useState } from 'react';
import TodoLists from "./TodoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])


  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
      

    });
    setInputList("");
    
    
  };
  const deleteItems=(id)=>{
    console.log("clicked")
    setItems((oldItems)=>{
      return oldItems.filter((arrElement, index)=>{
        return index !== id;
      })
    })
  }

  const itemEvent=(event)=>{
    setInputList(event.target.value)

  }
  return (
    <div className='main-div'>
    <div className='center-div'>

      <h1>ToDo List</h1>
      <br/>
      <input onChange={itemEvent}  type="text" placeholder='Add Items ' value={inputList} />
      <button onClick={listOfItems} >+</button>
      <ol>
        {Items.map((itemValue, index)=>{
          return <TodoLists text={itemValue} id={index} key={index} onSelect={deleteItems} /> 
        })}
      </ol>
      
      </div> 
    </div>
  )
}

export default App
