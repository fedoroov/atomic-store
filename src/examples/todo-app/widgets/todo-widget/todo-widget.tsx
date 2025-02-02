import { AddTodo } from "@todo-app/features/todo/add";
import { TodoCard, todoModel } from "@todo-app/entities/todo";
import { useAtom } from "@/packages/store/react";
import { FC } from "react";
import clsx from "clsx";
import { RemoveTodoBtn } from "@todo-app/features/todo/remove";
import { ToggleTodoBtn } from "@todo-app/features/todo/toggle";
import { EditScreen, EditTodoBtn } from "@todo-app/features/todo/edit";

import ListIcon from "@/assets/list.svg?react";
import { ThemeToggle } from "@todo-app/shared/ui/theme-toggle/theme-toggle";

export type TodoWidgetProps = {
  className?: string;
};

export const TodoWidget: FC<TodoWidgetProps> = ({ className }) => {
  const todos = useAtom(todoModel.todos);
  const uncompletedTodos = useAtom(todoModel.uncompletedTodos);
  const completedTodos = useAtom(todoModel.completedTodos);
  const loading = useAtom(todoModel.loading);
  const selectedTodo = useAtom(todoModel.selectedTodo);

  return (
    <div
      className={clsx(
        "relative flex flex-col w-full max-w-2xl min-h-96 py-8 px-6 bg-white rounded-lg sm:shadow-outside max-h-full overflow-y-auto dark:bg-gray-900 transition-colors",
        className
      )}
    >
      {loading ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <div className="spinner border-gray-700"></div>
        </div>
      ) : selectedTodo ? (
        <EditScreen />
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white transition-colors">
            Todo App
          </h1>
          <AddTodo className="mt-6" />

          {todos.length === 0 && (
            <div className="flex flex-col items-center text-center mt-12">
              <ListIcon className="stroke-gray-700 w-12 h-12" />
              <h2 className="mt-2 text-lg font-bold text-gray-700 dark:text-white transition-colors">
                No tasks yet
              </h2>
              <p className="mt-2 text-gray-400 dark:text-white transition-colors">
                Your task list is empty. Add a new task to get started.
              </p>
            </div>
          )}

          {uncompletedTodos.length !== 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2 text-gray-700 dark:text-white transition-colors">
                Active
              </h2>
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
              <h2 className="text-lg font-bold mb-2 text-gray-700 dark:text-white transition-colors">
                History
              </h2>
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
          <div className="flex justify-between items-center gap-2 mt-auto mb-0 pt-12">
            <ThemeToggle />
            <span className="text-xs text-gray-400 font-semibold">
              <span className="font-light">Active: </span>
              {uncompletedTodos.length}/{todos.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
