import { Todo } from "@/examples/todo-app/entities/todo";
import clsx from "clsx";
import { FC } from "react";
import { removeTodo } from "../model";

export type RemoveTodoProps = {
  className?: string;
  todo: Todo;
};

import RemoveIcon from "@/assets/remove.svg?react";

export const RemoveTodoBtn: FC<RemoveTodoProps> = ({ className, todo }) => {
  return (
    <button
      className={clsx(
        "stroke-gray-700 hover:stroke-gray-900 transition dark:stroke-white dark:hover:stroke-slate-200",
        className
      )}
      onClick={() => removeTodo(todo)}
    >
      <RemoveIcon className="w-5 h-5 stroke-inherit" />
    </button>
  );
};
