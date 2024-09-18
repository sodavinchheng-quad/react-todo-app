import { useEffect, useState } from "react";
import ITodoUseCases from "../../domain/usecases";
import { TodoViewModel } from "../../domain/types/todo";
import { useParams } from "react-router-dom";

type Props = {
  usecase: ITodoUseCases;
};

export const useTodo = ({ usecase }: Props) => {
  const { id } = useParams();
  const {  getAllTodos, getTodoById } = usecase;
  const [todo, setTodo] = useState<TodoViewModel | null>(null);
  const [todos, setTodos] = useState<TodoViewModel[]>([]);

  useEffect(() => {
    if (id) {
      getTodoById(Number(id)).then((todo) => setTodo(todo));
    } else {
      getAllTodos().then((todos) => setTodos(todos));
    }
  }, []);

  return { todo, todos }
};
