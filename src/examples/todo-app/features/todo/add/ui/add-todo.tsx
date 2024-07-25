import { FC, useRef } from "react";
import clsx from "clsx";
import { addTodo } from "../model";
import { Input } from "@/examples/todo-app/shared/ui/input";
import { Button } from "@/examples/todo-app/shared/ui/button";

export type AddTodoProps = {
  className?: string;
};

export const AddTodo: FC<AddTodoProps> = ({ className }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const text = inputRef.current?.value;

    if (text) {
      addTodo(text);
      inputRef.current!.value = "";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Add a new task"
        onKeyDown={handleKeyDown}
      />
      <Button primary onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};
