import { Todo, todoModel } from "@todo-app/entities/todo";

export const toggleTodo = (todo: Todo) => {
  todoModel.todos.set((prevTodos) =>
    prevTodos.map((prevTodo) =>
      prevTodo.id === todo.id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo
    )
  );
};
