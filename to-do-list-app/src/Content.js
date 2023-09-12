import React from "react";
import { ListToDos } from "./list-todos";

export const Content = ({
  todos,
  handleCheck,
  handleDeleteTodo,
  handleEmptyTodo,
}) => {
  return (
    <main>
      <ul>
        {/* {handleEmptyTodo(todos)} */}
        {todos.length < 1 ? (
          <p style={{ color: "grey", fontSize: 80 }}>your ToDo's are EmPtY</p>
        ) : (
          <ListToDos
            todos={todos}
            handleCheck={handleCheck}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </ul>
    </main>
  );
};
