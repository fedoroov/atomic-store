import clsx from "clsx";
import { FC } from "react";
import { themeModel } from "./model";
import { useAtom } from "@/packages/store/react";

import LightIcon from "@/assets/light.svg?react";
import DarkIcon from "@/assets/dark.svg?react";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const theme = useAtom(themeModel.theme);

  return (
    <button
      className={clsx(
        "flex items-center gap-2 text-xs py-2 px-3 border-[1px] border-slate-100 rounded-md hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-0 transition-colors",
        className
      )}
      onClick={themeModel.toggleTheme}
    >
      {theme === "light" ? (
        <>
          <LightIcon className={clsx("w-4 h-4 dark:stroke-white", className)} />
          <span>Light Theme</span>
        </>
      ) : (
        <>
          <DarkIcon className={clsx("w-4 h-4 dark:stroke-white", className)} />

          <span>Dark Theme</span>
        </>
      )}
    </button>
  );
};
