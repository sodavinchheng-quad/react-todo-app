import React from "react";
import { TodoItem } from "../components/todo_list_item";
import ITodoUseCases from "../../domain/usecases";
import { useTodo } from "../hooks/useTodo";

type Props = {
  usecase: ITodoUseCases;
};

export const TodoDetailView: React.FC<Props> = ({ usecase }) => {
  const { todo } = useTodo({ usecase });

  return (
    <div>
      <h1>Todo Detail</h1>

      {todo === null && <p>Todo not found</p>}
      {todo && <TodoItem todo={todo} />}
    </div>
  );
};
