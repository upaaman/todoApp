import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import ListTodo from "./ListTodo";
import { GoChecklist } from "react-icons/go";

const Todo = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.todo);

  // console.log(todos)

  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    let payload = {
      id: list.length,
      value: e,
      checked: false,
    };
    dispatch(addTodo(payload));
    setTask("");
  };
  // console.log(list)

  return (
    <div className="w-full flex bg-blue-50 h-screen  items-center p-10 space-y-8 flex-col">
      <div className="flex items-center justify-center space-x-5">
      <h1 className="text-3xl font-semibold">ToDo List</h1>
      <GoChecklist className="w-8 h-8  font-bold"/>
      </div>
      <div className=" ">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="rounded-lg h-[40px] w-[350px] text-lg text-left p-3"
          />
          <button onClick={() => handleAddTask(task)} className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center px-5 py-2 rounded-md ">
            Add
          </button>
        </div>

        <div className="">
          {
            list.length>0 ? 
            <ListTodo todoList={list} /> 
            :
            <h1 className="font-semibold text-2xl items-center justify-center flex mt-10">No items!!</h1>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Todo;
