import React from 'react';
const ToDoLists = (props) => {
    const deleteItems =() =>{
        console.log("deleted");
    }
    return(
        <>
        <div className="todo_style">
        <i className="fa f-times" aria-hidden="true" onClick={deleteItems}/>
        <li>{props.text} </li>
    </div>
    </>
    );
};
    export default ToDoLists;