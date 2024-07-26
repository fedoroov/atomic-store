import clsx from "clsx";
import { FC, useRef } from "react";

export type EditScreenProps = {
  className?: string;
};

import BackIcon from "@/assets/back.svg?react";
import { Input } from "@todo-app/shared/ui/input";
import { editTodo, saveTodo } from "../model";
import { useAtom } from "@/packages/store/react";
import { todoModel, TPriority } from "@todo-app/entities/todo";
import { Button } from "@todo-app/shared/ui/button";
import { Textarea } from "@todo-app/shared/ui/textarea";
import { Priority } from "@/examples/todo-app/shared/ui/priority";

export const EditScreen: FC<EditScreenProps> = ({ className }) => {
  const selectedTodo = useAtom(todoModel.selectedTodo);

  if (!selectedTodo) {
    throw new Error("Selected todo not found");
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const priorityRef = useRef<TPriority>(selectedTodo?.priority);

  const handleSave = () => {
    const text = inputRef.current?.value.trim() ?? selectedTodo?.text;
    const description = textareaRef.current?.value.trim() ?? "";
    const priority = priorityRef.current ?? selectedTodo?.priority;

    saveTodo({
      id: selectedTodo.id,
      text,
      priority,
      description,
    });

    editTodo(null);
  };

  const handleBack = () => {
    editTodo(null);
  };

  return (
    <div className={clsx("flex flex-col w-full min-h-96", className)}>
      <div className="flex items-center justify-start gap-2">
        <button className="hover:bg-slate-100 p-2" onClick={handleBack}>
          <BackIcon className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-700">Edit Task</h1>
      </div>
      <div className="flex-1">
        <div className="mt-8">
          <label>
            <h2 className="text-sm font-medium text-gray-700">Name</h2>
            <Input
              ref={inputRef}
              className="mt-2"
              placeholder="Enter task name"
              defaultValue={selectedTodo.text}
            />
          </label>
        </div>
        <div className="mt-4">
          <label>
            <h2 className="text-sm font-medium text-gray-700">
              Additional Description
            </h2>
            <Textarea
              ref={textareaRef}
              className="mt-2 resize-none"
              placeholder="Enter task description"
              defaultValue={selectedTodo.description}
            />
          </label>
        </div>
        <div className="mt-4">
          <h2 className="text-sm font-medium text-gray-700">Priority</h2>
          <Priority
            className="mt-2"
            onChange={(value) => (priorityRef.current = value)}
            defaultValue={selectedTodo.priority}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-6">
        <Button secondary onClick={handleBack}>
          Back
        </Button>
        <Button primary onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};
