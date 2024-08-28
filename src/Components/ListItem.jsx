import React from 'react'
import { useDispatch } from 'react-redux';
import { checkTask, deleteTodo } from '../redux/todoSlice';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ListItem = ({ item ,setTask,setEditTaskId}) => {
    const dispatch=useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleCheckTask = (id) => {
        dispatch(checkTask(id));
    };
    // console.log(todoList)
    const handleEdit = (item) => {

        setTask(item.value)
        setEditTaskId(item.id);
        // dispatch(deleteTodo(id));
    }

   
    return (
        <div
            className="bg-blue-300 py-2 px-3 rounded-md"
            key={item.id}>
            <div className="flex justify-between text-2xl pl-2">
                <span
                    className={`${item.checked ? "line-through opacity-35" : ""}`}
                >
                    {item.value}
                </span>
                <div className="flex items-center justify-center space-x-3">
                    <input

                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => handleCheckTask(item.id)}
                        className={`${item.checked === true ? 'accent-green-500' : ""} w-[15px] h-[15px]`}
                    />
                    <FaRegTrashCan
                        onClick={() => handleDelete(item.id)}
                    />
                    <FaEdit
                        onClick={() => handleEdit(item)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ListItem