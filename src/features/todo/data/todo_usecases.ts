import { TodoViewModel } from "../domain/types/todo";
import ITodoUseCases from "../domain/usecases";
import todos from "../../../core/mock/todo.json";
import { mapTodoData } from "./map_todo_data";

class TodoUsecases implements ITodoUseCases {
  async getAllTodos(): Promise<TodoViewModel[]> {
    return todos.map(mapTodoData);
  }

  async getTodoById(id: number): Promise<TodoViewModel | null> {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) return null;

    return mapTodoData(todo);
  }

  async getTodosByUserId(id: number): Promise<TodoViewModel[]> {
    return todos.filter((todo) => todo.assignee.id === id).map(mapTodoData);
  }

  async createTodo(todo: TodoViewModel): Promise<TodoViewModel> {
    throw new Error("Method not implemented.");
  }

  async updateTodo(todo: TodoViewModel): Promise<TodoViewModel> {
    throw new Error("Method not implemented.");
  }

  async deleteTodoById(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async completeTodoById(id: number): Promise<TodoViewModel> {
    throw new Error("Method not implemented.");
  }
}

export default TodoUsecases;
