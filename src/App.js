import React from 'react';

const App =() => {
    const[inputList , setInputList] = useState ("");

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
    <input type="text" placeholder="Add a Item"/>
    <button> + </button>
    </div>

    </div>
    </>;
};

export default App;
  
