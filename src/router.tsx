import { createBrowserRouter } from "react-router-dom";
import { TodoDetail, TodoList } from "./features/todo/todo_controller";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: TodoList,
  },
  {
    path: "/todo/:id",
    element: TodoDetail,
  }
]);

export default router;
