import React from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTodo } from "../redux/todoSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ListTodo = ({ todoList, setTask, setEditTaskId }) => {
  const dispatch = useDispatch();

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
    <div className="rounded-md mt-6 font-semibold ">
      <div className="space-y-2">
        {todoList.map((item) => (
          <div
            className="bg-blue-300 py-2 px-3 rounded-md"
            key={item.id}>
            <div className="flex justify-between text-2xl">

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
                  className="w-5 h-5 "
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
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
