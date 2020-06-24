import React , {useState} from 'react';
import ToDoLists from './ToDoLists';

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
        const deleteItem = () =>{
            console.log("deleted");
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
    {item.map((itemval, index) => {
        return (
            <ToDoLists
            key={index}
            id={index}
            text={itemval}
            onSelect={deleteItem}
        />
        );
    })}
    </ol>
    </div>
    </div>
    </>  
};
export default App;
  
