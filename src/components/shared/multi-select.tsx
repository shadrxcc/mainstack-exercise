import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export interface Option {
  id: number;
  name: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: Option[];
  placeholder?: string;
  label?: string;
  onChange: (selected: Option[]) => void;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  label,
  placeholder = "Select options",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="grid gap-3">
      {label && (
        <p className="font-semibold text-base text-main-grey">{label}</p>
      )}

      <Listbox value={selected} onChange={onChange} multiple>
        <div>
          <ListboxButton
            onClick={() => setOpen(!open)}
            className={cn(
              "flex items-center truncate justify-between transition-all ease-in-out duration-[250ms] border text-sm font-medium px-4 py-3.5 rounded-xl w-full text-left",
              open
                ? "bg-white border-main-black border-2"
                : "border-main-lightgrey bg-main-lightgrey"
            )}
          >
            {selected.length > 0
              ? selected.map((option) => option.name).join(", ")
              : placeholder}
            <img
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all ease-in-out duration-[450ms]`}
              src="/assets/expand_more.svg"
              alt="dropdown"
            />
          </ListboxButton>

          <ListboxOptions
            ref={dropdownRef}
            className="absolute w-full max-w-[412px] mt-1 bg-white p-2 rounded-xl shadow-custom z-[9999] max-h-60 overflow-auto no-scroll"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="p-3.5 cursor-pointer flex items-center gap-x-3 hover:bg-main-lightgrey rounded-lg duration-300 transition-all ease-in-out"
              >
                {selected.find((item) => item.id === option.id) ? (
                  <img
                    className="ease-in-out transition-all duration-500"
                    src="/assets/check_box.svg"
                    alt="check"
                  />
                ) : (
                  <img
                    className="ease-in-out transition-all duration-500"
                    src="/assets/check_box_outline_blank.svg"
                    alt="check outline"
                  />
                )}
                {option.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
