import React from "react";
import { TodoViewModel } from "../../domain/types/todo";

type Props = {
  todo: TodoViewModel;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <div>{todo.completed}</div>
      <div>{todo.dueDate}</div>
      <div>{todo.completedAt}</div>
      <div>{todo.assignee}</div>
    </div>
  );
};
