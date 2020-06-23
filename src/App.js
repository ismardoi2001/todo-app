import React ,{useState} from 'react';

const App =() => {
    const [inputList , setInputList] = useState ("");
    const [item, setItem] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
     const listOfItem = () =>{};
    return <>
    <div className="main_div">
    <div className ="center_div">
    <br/>
    <h1> ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a Item" onChange={itemEvent}/>
    <button onClick= {listOfItem}> + </button>

    <ol>
    {/* <li> {inputList}</li>*/}
    {item.map((itemval) => {
        return <li>{itemval} </li>
    })}
    </ol>
    </div>
    </div>
    </>
    
};

export default App;
  
