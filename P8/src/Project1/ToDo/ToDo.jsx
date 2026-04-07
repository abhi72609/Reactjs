import { useState } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import "./Todo.css";
export const ToDo = () => {
    const[inputValue,setInputValue] = useState("");
    const[task,setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // No input value then return means no empty string is added
        if(!inputValue) return;
        
        // if array already has value then return 
        if(task.includes(inputValue)){
            // once item is add the inputBox will get empty that's why setInputValue to empty String -> "" 
            setInputValue("");
            return;
        } 

        // it keep prev add item and also keep new item bcz of ""...prevTask" separator prev item are safe
        setTask((prevTask) => [...prevTask,inputValue]);

        
    }


    return(
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
            </header>

            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                        type="text" 
                        className="todo-input" 
                        autoComplete="off" 
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section  className="myUnOrderList">
                <ul>
                    {task.map((curTask,index) => {
                        return(
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <buttton className="check-btn"> <MdCheck/> </buttton>
                                <button className="delete-btn"> <MdDeleteForever /> </button>
                            </li>
                        )    
                    })}
                </ul>
            </section>

        </section>
        
    )
}