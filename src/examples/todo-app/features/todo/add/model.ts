import { todoModel } from "@todo-app/entities/todo";

export const addTodo = (text: string) => {
  const trimmedText = text.trim();

  if (!trimmedText) {
    return;
  }

  todoModel.todos.set((prevTodos) => {
    const lastTodoId = prevTodos[prevTodos.length - 1]?.id || 0;
    const lastId = +lastTodoId;

    return [
      ...prevTodos,
      { id: `${lastId + 1}`, text, completed: false, priority: "low" },
    ];
  });
};
