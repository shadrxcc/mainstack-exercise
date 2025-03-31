import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col mx-auto w-full max-w-[344px] gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        // nav_button: cn(
        //   buttonVariants({ variant: "outline" }),
        //   "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        // ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex justify-between",
        head_cell:
          "text-main-grey px-1.5 py-0.5 font-normal text-xs font-semibold",
        row: "flex w-full justify-between mt-2",
        cell: cn(
          "relative text-center text-xs focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-[84px]",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-[84px] [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-[84px]"
            : "[&:has([aria-selected])]:rounded-[84px]"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 px-1.5 py-0.5 text-center text-sm font-semibold aria-selected:opacity-100"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-main-black text-white rounded-[84px] aria-selected:bg-main-black aria-selected:text-white aria-selected:rounded-[84px]",
        day_today: "bg-main-lightgrey text-main-black rounded-[84px] aria-selected:bg-main-black aria-selected:text-white aria-selected:rounded-[84px]",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
