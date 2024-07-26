import clsx from "clsx";
import { FC } from "react";
import "./priority.css";

type Priority = "low" | "medium" | "high";

export type RadioButtonsProps = {
  className?: string;
  defaultValue: Priority;
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
        <label key={priority.key} className="label flex items-center gap-1">
          <div className={clsx("w-8 h-4 rounded-sm", bgColors[priority.key])} />
          <span className="text-gray-700">{priority.label}</span>
          <input
            type="radio"
            name="priority"
            className="radio"
            value={priority.key}
            defaultChecked={priority.key === defaultValue}
            onChange={handleRadioChange}
          />
          <div
            className={clsx(
              "w-4 h-4 border-[1px] border-gray-200 rounded-full"
            )}
          />
        </label>
      ))}
    </div>
  );
};
