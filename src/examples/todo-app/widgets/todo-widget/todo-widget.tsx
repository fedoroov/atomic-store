import { AddTodo } from "@todo-app/features/todo/add";
import { TodoCard, todoModel } from "@todo-app/entities/todo";
import { useAtom } from "@/packages/store/react";
import { FC } from "react";
import clsx from "clsx";
import { RemoveTodoBtn } from "@todo-app/features/todo/remove";
import { ToggleTodoBtn } from "@todo-app/features/todo/toggle";
import { EditScreen, EditTodoBtn } from "@todo-app/features/todo/edit";

import ListIcon from "@/assets/list.svg?react";

export type TodoWidgetProps = {
  className?: string;
};

export const TodoWidget: FC<TodoWidgetProps> = ({ className }) => {
  const todos = useAtom(todoModel.todos);
  const uncompletedTodos = useAtom(todoModel.uncompletedTodos);
  const completedTodos = useAtom(todoModel.completedTodos);
  const loading = useAtom(todoModel.loading);
  const selectedTodo = useAtom(todoModel.selectedTodo);

  if (loading) {
    return (
      <div
        className={clsx(
          "flex justify-center items-center w-full max-w-xl min-h-96 p-6 bg-white rounded-lg shadow-outside",
          className
        )}
      >
        <div className="spinner border-gray-700"></div>
      </div>
    );
  }

  if (selectedTodo) {
    return <EditScreen />;
  }

  return (
    <div
      className={clsx(
        "w-full max-w-xl min-h-96 py-8 px-6 bg-white rounded-lg shadow-outside max-h-full overflow-y-auto",
        className
      )}
    >
      <h1 className="text-2xl font-bold text-gray-700">Todo App</h1>
      <AddTodo className="mt-6" />

      {todos.length === 0 && (
        <div className="flex flex-col items-center text-center mt-12">
          <ListIcon className="stroke-gray-700 w-12 h-12" />
          <h2 className="mt-2 text-lg font-bold text-gray-700">No tasks yet</h2>
          <p className="mt-2 text-gray-400">
            Your task list is empty. Add a new task to get started.
          </p>
        </div>
      )}

      {uncompletedTodos.length !== 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2 text-gray-700">Active</h2>
          <ul className="flex flex-col gap-2">
            {uncompletedTodos.map((todo) => (
              <li key={todo.id}>
                <TodoCard
                  todo={todo}
                  EditTodoBtn={<EditTodoBtn todo={todo} />}
                  RemoveTodoBtn={<RemoveTodoBtn todo={todo} />}
                  ToggleTodoBtn={<ToggleTodoBtn todo={todo} />}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {completedTodos.length !== 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2 text-gray-700">History</h2>
          <ul key="completed" className="flex flex-col gap-2">
            {completedTodos.map((todo) => (
              <li key={todo.id}>
                <TodoCard
                  todo={todo}
                  RemoveTodoBtn={<RemoveTodoBtn todo={todo} />}
                  ToggleTodoBtn={<ToggleTodoBtn todo={todo} />}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-end items-center gap-2 mt-12">
        <span className="text-xs text-gray-400 font-semibold">
          <span className="font-light">Active: </span>
          {uncompletedTodos.length}/{todos.length}
        </span>
      </div>
    </div>
  );
};
