// leacture - 39
import { useState } from "react";
import "./Todo.css";
import { ToDoForm } from "./ToDoFrom";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";

export const ToDo = () => {
    const[task,setTask] = useState([]);


    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        //to check whether th input is empty of not
        if(!inputValue.content) return;

        // to check if data already exists but it's not string any more so instead of input it should be find
        // if(task.includes(inputValue)) return;
        const ifToDoContnetMatched = task.find(
            (curTask) => curTask.content === content
        );
        if(ifToDoContnetMatched) return;
        
        setTask((prevTask) => [...prevTask,{id,content,checked}]);
    }

    // todo -> handleDeleteToDo function
    const handleDeleteToDo = (value) => {
        const updateTask = task.filter((curTask) => curTask.content !== value);
        setTask(updateTask);
    };
    // todo -> handleClearToDoData function
    const handleClearToDoData = () => {
        setTask([]); // empty the contain which is store in array
    };

    const handleCheckedToDo = (content) => {
        const updatedTask = task.map((curTask) =>{
            if(curTask.content === content){
                return {...curTask, checked : !curTask.checked};
            }else{
                return curTask;
            }
        });
        setTask(updatedTask);
    };

    return(
        <section className="todo-container">
            <header className="header">
                <h1>ToDo List Project</h1>
                
                {/* Component for ToDoDateTime */}
                <ToDoDateTime /> 
            </header>
            {/* Component for ToDoForm */}
            <ToDoForm onAddToDo={handleFormSubmit}/>
            <section  className="myUnOrderList">
                <ul>
                    {task.map((curTask) => {
                        return (
                            // Component for ToDoList
                            <ToDoList 
                            key={curTask.id} 
                            data={curTask.content}
                            checked={curTask.checked} 
                            onHandleDeleteToDo={handleDeleteToDo}
                            onHandleCheckedToDo={handleCheckedToDo}
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




// leacture - 34 to 38
// import { useState } from "react";
// import "./Todo.css";
// import { ToDoForm } from "./ToDoFrom";
// import { ToDoList } from "./ToDoList";
// import { ToDoDateTime } from "./ToDoDateTime";

// export const ToDo = () => {
//     const[task,setTask] = useState([]);


//     const handleFormSubmit = (inputValue) => {
//         // No input value then return means no empty string is added
//         if(!inputValue) return;
        
//         // if array already has value then return 
//         if(task.includes(inputValue)) return;

//         // it keep prev add item and also keep new item bcz of ""...prevTask" separator prev item are safe
//         setTask((prevTask) => [...prevTask,inputValue]);
//     }

//     // todo -> handleDeleteToDo function
//     const handleDeleteToDo = (value) => {
//         console.log(task);
//         console.log(value);
//         const updateTask = task.filter((curTask) => curTask !== value);
//         setTask(updateTask);
//     };
//     // todo -> handleClearToDoData function
//     const handleClearToDoData = () => {
//         setTask([]); // empty the contain which is store in array
//     };

//     return(
//         <section className="todo-container">
//             <header className="header">
//                 <h1>ToDo List</h1>
//                 {/* Component for ToDoDateTime */}
//                 <ToDoDateTime /> 
//             </header>
//             {/* Component for ToDoForm */}
//             <ToDoForm onAddToDo={handleFormSubmit}/>
//             <section  className="myUnOrderList">
//                 <ul>
//                     {task.map((curTask,index) => {
//                         return (
//                             // Component for ToDoList
//                             <ToDoList 
//                             key={index} 
//                             data={curTask} 
//                             onHandleDeleteToDo={handleDeleteToDo}
//                             />
//                         );
//                     })}
//                 </ul>
//             </section>
//             <section>
//                 <button className="clear-btn" onClick={handleClearToDoData}>Clear All</button>
//             </section>

//         </section>
        
//     )
// }