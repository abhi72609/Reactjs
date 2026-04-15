const toDoKeys = "reactToDo";

export const getLocalStorageToDoData = () => {
    // getting data back from the local Stroge(Web Browser)
        const rowToDos = localStorage.getItem(toDoKeys);
        if(!rowToDos) return [];
        return JSON.parse(rowToDos);
}


export const setLocalStorageToDoData = (task) => {
    return localStorage.setItem(toDoKeys,JSON.stringify(task))
}
