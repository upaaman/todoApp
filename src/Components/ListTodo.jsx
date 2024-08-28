import React from "react";

import ListItem from "./ListItem";

const ListTodo = ({ todoList, setTask, setEditTaskId }) => {

  
  return (
    <div className="rounded-md mt-6 font-semibold ">
      <div className="space-y-2">
        {todoList.map((item) => (
          <ListItem item={item} setTask={setTask} setEditTaskId={setEditTaskId} />
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
