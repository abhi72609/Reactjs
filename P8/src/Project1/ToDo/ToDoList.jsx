import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({key, data, onHandleDeleteToDo}) => {
  return (
    <li key={key} className="todo-item">
      <span>{data}</span>
      <buttton className="check-btn">
        <MdCheck />
      </buttton>
      <button className="delete-btn" onClick={() => onHandleDeleteToDo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
