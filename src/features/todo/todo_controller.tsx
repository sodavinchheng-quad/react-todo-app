import TodoUsecases from "./data/todo_usecases";
import { TodoDetailView } from "./presentation/view/todo_detail_view";
import { TodoListView } from "./presentation/view/todo_list_view";

const usecase = new TodoUsecases();

export const TodoList = <TodoListView usecase={usecase} />;
export const TodoDetail = <TodoDetailView usecase={usecase} />;
