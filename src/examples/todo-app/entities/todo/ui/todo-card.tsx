import { FC, ReactNode } from "react";
import { Todo } from "../model";
import clsx from "clsx";

export type TodoCard = {
  className?: string;
  todo: Todo;
  RemoveTodoBtn: ReactNode;
  ToggleTodoBtn: ReactNode;
  EditTodoBtn?: ReactNode;
};

export const TodoCard: FC<TodoCard> = ({
  className,
  todo,
  RemoveTodoBtn,
  ToggleTodoBtn,
  EditTodoBtn,
}) => {
  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-4 py-2 min-h-16 justify-between bg-slate-100 rounded-md px-4 border-l-8",
        {
          "border-red-500": todo.priority === "high",
          "border-yellow-500": todo.priority === "medium",
          "border-slate-300": todo.priority === "low",
        },
        className
      )}
    >
      <label className="flex items-center gap-2 cursor-pointer">
        {ToggleTodoBtn}
        <p
          className={clsx("flex flex-col", {
            "line-through": todo.completed,
          })}
        >
          {todo.text}
          {todo.description && (
            <span className="text-xs text-gray-400 font-light line-clamp-1">
              {todo.description}
            </span>
          )}
        </p>
      </label>
      <div className="flex items-center gap-2">
        {EditTodoBtn}
        {RemoveTodoBtn}
      </div>
    </div>
  );
};
