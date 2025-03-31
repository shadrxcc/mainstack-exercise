import * as React from "react";
import { format } from "date-fns";

import { cn } from "../../lib/utils";

import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  initialDate?: Date;
  placeholder?: string;
  buttonClassName?: string;
  dateFormat?: string;
  label?: string;
  optional?: boolean;
  error?: boolean;
  disabled?: boolean;
  startDate?: Date;
}

export function DatePicker({
  date: controlledDate,
  onDateChange,
  initialDate,
  placeholder,
  buttonClassName,
  className,
  optional = false,
  label,
  error,
  dateFormat = "dd MMM yyyy",
  disabled,
  startDate,
  ...props
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    controlledDate || initialDate
  );
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDate(controlledDate ?? undefined);
  }, [controlledDate]);

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const adjustedDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      setDate(adjustedDate);
      if (onDateChange) {
        onDateChange(adjustedDate);
      }
    } else {
      setDate(undefined);
      if (onDateChange) {
        onDateChange(undefined);
      }
    }
    setOpen(false);
  };

  return (
    <div className={cn("grid w-full gap-3", className)} {...props}>
      <p className="font-semibold text-base text-main-grey">{label}</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            disabled={disabled}
            className={cn(
              "flex items-center justify-between transition-all ease-in-out duration-[250ms] border text-sm font-medium px-4 py-3.5 rounded-xl w-full text-left",
              buttonClassName,
              open ? "bg-white border-main-black border-2" : "border-main-lightgrey  bg-main-lightgrey"
              //   error ? "border-danger focus:!ring-0" : "",
              //   !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, dateFormat) : <span>{placeholder}</span>}
            <img className={`${open ? "rotate-180": "rotate-0"} transition-all ease-in-out duration-[450ms]`} src="/assets/expand_more.svg" alt="dropdown" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="!w-[412px] !bg-white mt-1 !rounded-xl shadow-custom !z-9999 !p-[33.7px]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
            disabled={startDate ? (day: Date) => day < startDate : disabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
