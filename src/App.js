import React , {useState} from 'react';
import React, {ToDoLists} from './ToDoLists';

https://www.youtube.com/watch?v=XXRptlP5P6U


const App =() => {
    const [inputList , setInputList] = useState ("");
    const [item, setItem] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
     const listOfItem = () =>{
         setItem((olditems) =>{
             return [...olditems, inputList];
         })
         setInputList("");
     };
    return <>
    <div className="main_div">
    <div className ="center_div">
    <br/>
    <h1> ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a Item"
    value={inputList}
    onChange={itemEvent}/>
    <button onClick= {listOfItem}> + </button>

    <ol>
    {/* <li> {inputList}</li>*/}
    {item.map((itemval) => {
    <ToDoLists/>
    })}
    </ol>
    </div>
    </div>
    </>  
};
export default App;
  
