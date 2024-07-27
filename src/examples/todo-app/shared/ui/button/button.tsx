import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type ButtonProps = {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  primary = false,
  secondary = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center border-0 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 transition-colors",
        {
          "bg-gray-700 hover:bg-gray-900 text-white dark:bg-blue-800 dark:hover:bg-blue-700":
            primary,
          "bg-slate-100 hover:bg-slate-200 text-gray-700": secondary,
        },
        className
      )}
    >
      {children}
    </button>
  );
};
