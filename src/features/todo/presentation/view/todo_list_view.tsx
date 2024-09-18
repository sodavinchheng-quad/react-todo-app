import React from "react";
import { TodoItem } from "../components/todo_list_item";
import ITodoUseCases from "../../domain/usecases";
import { useTodo } from "../hooks/useTodo";

type Props = {
  usecase: ITodoUseCases;
}

export const TodoListView: React.FC<Props> = ({ usecase }) => {
  const { todos } = useTodo({ usecase });

  return (
    <div>
      <h1>Todo List</h1>
      
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};
