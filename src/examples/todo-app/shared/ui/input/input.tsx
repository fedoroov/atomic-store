import clsx from "clsx";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, inputRef) => {
    return (
      <input
        {...props}
        ref={inputRef}
        className={clsx(
          "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white border-slate-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-900 transition-colors",
          className
        )}
      />
    );
  }
);
