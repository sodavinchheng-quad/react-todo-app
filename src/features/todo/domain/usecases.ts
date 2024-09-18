import { TodoViewModel } from "./types/todo";

interface ITodoUseCases {
  getAllTodos(): Promise<TodoViewModel[]>;
  getTodoById(id: number): Promise<TodoViewModel | null>;
  getTodosByUserId(id: number): Promise<TodoViewModel[]>;
  createTodo(todo: TodoViewModel): Promise<TodoViewModel>;
  updateTodo(todo: TodoViewModel): Promise<TodoViewModel>;
  deleteTodoById(id: number): Promise<void>;
  completeTodoById(id: number): Promise<TodoViewModel>;
}

export default ITodoUseCases;
