import { useState } from "react";

export const ToDoForm = ({onAddToDo}) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
    }

    // Bcz form is avilable here in this component therefore event is used here not in ToDo.jsx
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddToDo(inputValue); // using this parent function is called and inputValue(item) is passed
        setInputValue(""); //clears after successful add
    }

  return (
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
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
