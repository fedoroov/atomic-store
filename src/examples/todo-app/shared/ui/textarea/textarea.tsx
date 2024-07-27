import clsx from "clsx";
import { forwardRef } from "react";

export interface TextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, textareaRef) => {
    return (
      <textarea
        {...props}
        ref={textareaRef}
        className={clsx(
          "flex h-10 w-full rounded-md border min-h-32 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white border-input text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-900 transition-colors",
          className
        )}
      />
    );
  }
);
