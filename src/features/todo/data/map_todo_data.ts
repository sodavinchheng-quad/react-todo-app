import { TodoViewModel } from "../domain/types/todo";

export const mapTodoData = (data: any): TodoViewModel => {
  return {
    id: data["id"] ?? 0,
    title: data["title"] ?? "",
    content: data["content"] ?? "",
    completed: data["is_completed"] ?? false,
    completedAt: data["completed_at"] ?? "",
    dueDate: data["due_date"] ?? "",
    assignee: data["assignee"]?.["name"] ?? "",
  };
};
