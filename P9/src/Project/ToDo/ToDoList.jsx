import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({data,checked, onHandleDeleteToDo, onHandleCheckedToDo}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <buttton className="check-btn" onClick={() => onHandleCheckedToDo(data)}>
        <MdCheck />
      </buttton>
      <button className="delete-btn" onClick={() => onHandleDeleteToDo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
