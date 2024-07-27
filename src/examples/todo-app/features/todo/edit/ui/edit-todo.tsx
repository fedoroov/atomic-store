import { Todo } from "@todo-app/entities/todo";
import { editTodo } from "../model";

import clsx from "clsx";
import { FC } from "react";

import EditIcon from "@/assets/edit.svg?react";

type EditTodoProps = {
  className?: string;
  todo: Todo;
};

export const EditTodoBtn: FC<EditTodoProps> = ({ className, todo }) => {
  return (
    <button
      className={clsx(
        "stroke-gray-700 hover:stroke-gray-900 transition dark:stroke-white dark:hover:stroke-slate-200",
        className
      )}
      onClick={() => editTodo(todo)}
    >
      <EditIcon className="w-5 h-5 stroke-inherit" />
    </button>
  );
};
