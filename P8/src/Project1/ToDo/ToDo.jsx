import { useState } from "react";
import "./Todo.css";
import { ToDoForm } from "./ToDoFrom";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";

export const ToDo = () => {
    const[task,setTask] = useState([]);


    const handleFormSubmit = (inputValue) => {
        // No input value then return means no empty string is added
        if(!inputValue) return;
        
        // if array already has value then return 
        if(task.includes(inputValue)) return;

        // it keep prev add item and also keep new item bcz of ""...prevTask" separator prev item are safe
        setTask((prevTask) => [...prevTask,inputValue]);
    }

    // todo -> handleDeleteToDo function
    const handleDeleteToDo = (value) => {
        console.log(task);
        console.log(value);
        const updateTask = task.filter((curTask) => curTask !== value);
        setTask(updateTask);
    };
    // todo -> handleClearToDoData function
    const handleClearToDoData = () => {
        setTask([]); // empty the contain which is store in array
    };

    return(
        <section className="todo-container">
            <header className="header">
                <h1>ToDo List</h1>
                {/* Component for ToDoDateTime */}
                <ToDoDateTime /> 
            </header>
            {/* Component for ToDoForm */}
            <ToDoForm onAddToDo={handleFormSubmit}/>
            <section  className="myUnOrderList">
                <ul>
                    {task.map((curTask,index) => {
                        return (
                            // Component for ToDoList
                            <ToDoList 
                            key={index} 
                            data={curTask} 
                            onHandleDeleteToDo={handleDeleteToDo}
                            />
                        );
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearToDoData}>Clear All</button>
            </section>

        </section>
        
    )
}