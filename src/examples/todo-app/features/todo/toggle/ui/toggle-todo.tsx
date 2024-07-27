import { Todo } from "@todo-app/entities/todo";
import clsx from "clsx";
import { FC } from "react";
import { toggleTodo } from "../model";

export type ToggleTodoProps = {
  className?: string;
  todo: Todo;
};

import CheckIcon from "@/assets/check.svg?react";

export const ToggleTodoBtn: FC<ToggleTodoProps> = ({ className, todo }) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center h-4 w-4 shrink-0 rounded-sm border border-gray-700 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:bg-gray-700 aria-checked:text-white text-transparent hover:border-gray-900 dark:bg-white dark:border-0",
        className
      )}
      type="button"
      role="checkbox"
      aria-checked={todo.completed}
      onClick={() => toggleTodo(todo)}
    >
      <CheckIcon />
    </button>
  );
};
