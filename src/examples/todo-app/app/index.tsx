import { useAtom } from "@/packages/store/react";
import { TodoWidget } from "../widgets/todo-widget";
import { themeModel } from "@todo-app/shared/ui/theme-toggle/";
import clsx from "clsx";

export const TodoApp = () => {
  const theme = useAtom(themeModel.theme);
  return (
    <div
      className={clsx(
        "flex sm:items-center justify-center w-full h-screen sm:p-4 dark:bg-gray-700 transition-colors",
        {
          dark: theme === "dark",
        }
      )}
    >
      <TodoWidget />
    </div>
  );
};
