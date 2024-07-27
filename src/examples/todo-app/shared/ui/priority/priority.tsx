import clsx from "clsx";
import { FC } from "react";

type Priority = "low" | "medium" | "high";
type Theme = "light" | "dark";

export type RadioButtonsProps = {
  className?: string;
  defaultValue: Priority;
  theme?: Theme;
  onChange: (value: Priority) => void;
};

const priorities: { key: Priority; label: string }[] = [
  {
    key: "low",
    label: "Low",
  },
  {
    key: "medium",
    label: "Medium",
  },
  {
    key: "high",
    label: "High",
  },
];

const bgColors = {
  low: "bg-slate-300",
  medium: "bg-yellow-500",
  high: "bg-red-500",
};

export const Priority: FC<RadioButtonsProps> = ({
  className,
  defaultValue,
  onChange,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as Priority);
  };

  return (
    <div className={clsx(className, "flex flex-wrap items-center gap-4")}>
      {priorities.map((priority) => (
        <label className="relative flex items-center gap-2 rounded-full cursor-pointer">
          <div className={clsx("w-6 h-4 rounded-sm", bgColors[priority.key])} />
          <div className="relative flex">
            <input
              tabIndex={0}
              name="type"
              type="radio"
              value={priority.key}
              onChange={handleRadioChange}
              defaultChecked={defaultValue === priority.key}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 hover:border-gray-900 dark:hover:border-slate-100 text-gray-900 transition-all"
            />
            <span className="absolute text-gray-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </span>
          </div>
          <span className="font-light text-gray-700 cursor-pointer select-none dark:text-white">
            {" "}
            {priority.label}
          </span>
        </label>
      ))}
    </div>
  );
};
