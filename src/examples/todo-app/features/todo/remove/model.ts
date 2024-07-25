import { Todo, todoModel } from "@todo-app/entities/todo";

export const removeTodo = (todo: Todo) => {
  todoModel.todos.set((prevTodos) =>
    prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
  );
};
