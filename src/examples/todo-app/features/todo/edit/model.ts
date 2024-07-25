import { Todo, todoModel } from "@todo-app/entities/todo";

export const editTodo = (todo: Todo | null) => {
  todoModel.selectedTodo.set(todo);
};

export const saveTodo = (todo: Partial<Todo>) => {
  todoModel.todos.set((prevTodos) => {
    return prevTodos.map((prevTodo) => {
      if (prevTodo.id === todo.id) {
        return {
          ...prevTodo,
          ...todo,
        };
      }

      return prevTodo;
    });
  });
};
