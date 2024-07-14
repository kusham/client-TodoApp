import React from "react";
import TodoForm from "./TodoForm";
import { TableTile, TodoListContainer, TopRowTable } from "./Todo-style";
import { ACTION_TYPES } from "./Constants";

const CreateTodo = () => {
  return (
    <TodoListContainer>
      <TopRowTable>
        <TableTile>
          {/* <UserOutlined />  */}
          Create Todo
        </TableTile>
      </TopRowTable>
      <TodoForm type={ACTION_TYPES.ADD} />
    </TodoListContainer>
  );
};

export default CreateTodo;
