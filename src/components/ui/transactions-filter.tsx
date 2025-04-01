import { motion } from "framer-motion";
import DialogComponent from "../shared/custom-dialog";
import Button from "../shared/button";
import {
  Period,
  TransactionStatus,
  TransactionType,
} from "../../services/models/shared.model";
import clsx from "clsx";
import { DatePicker } from "../shared/datepicker";
import { MultiSelect } from "../shared/multi-select";
import { FilterState } from "./transactions";
import { useEffect, useMemo, useState } from "react";

function TransactionsFilter({
  onClose,
  isOpen,
  onApply,
  filterState,
}: {
  onClose: () => void;
  isOpen: boolean;
  filterState: FilterState;
  onApply: (filter: FilterState) => void;
}) {
  const [filters, setFilters] = useState<FilterState>(filterState);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animationValues = useMemo(() => {
    return {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: isMobile ? 0 : -10 },
      exit: { opacity: 0, x: 50 },
    };
  }, [isMobile]);

  const handleClear = () => {
    setFilters({
      period: null,
      from: undefined,
      to: undefined,
      types: [],
      status: [],
    });
  };

  const handlePeriodSelect = (period: Period) => {
    setFilters({
      ...filters,
      period: filterState.period === period ? null : period,
    });
  };

  return (
    <DialogComponent isOpen={isOpen} onClose={onClose}>
      <motion.div
        className="sm:max-w-[456px] fixed flex flex-col right-0 overflow-y-scroll no-scroll h-full sm:min-h-[98%] w-full bg-white rounded-[20px] shadow-custom-2"
        initial={animationValues.initial}
        animate={animationValues.animate}
        exit={animationValues.exit}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          damping: 25,
          stiffness: 200,
        }}
      >
        <div className="flex items-center px-6 py-[22px] justify-between">
          <h1 className="text-2xl font-bold text-main-black">Filter</h1>

          <Button
            variant="none"
            onClick={onClose}
            className="!p-0 ml-auto !w-10 !h-10 !rounded-full hover:!bg-main-lightgrey"
          >
            <img src="/assets/close.svg" alt="close icon" />
          </Button>
        </div>

        <div className="flex flex-col gap-y-16 flex-1 justify-between pb-5">
          <div className="flex flex-col gap-y-6">
            <div className="!overflow-x-auto no-scroll px-6 pb-2">
              <div className="flex items-center gap-x-3 min-w-max">
                {Object.values(Period).map((period) => (
                  <Button
                    onClick={() => handlePeriodSelect(period)}
                    key={period}
                    variant={filters.period === period ? "solid" : "light-grey"}
                    className={clsx(
                      "!py-2.5 !px-[18px] !whitespace-nowrap transition ease-in-out duration-500",
                      `${
                        filters.period === period
                          ? "bg-main-black"
                          : "hover:!bg-main-lightgrey !border !border-main-lightgrey"
                      }`
                    )}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid px-6 gap-3">
              <p className="font-semibold text-base text-main-grey">
                Date Range
              </p>
              <div className="flex items-center gap-x-1.5">
                <DatePicker
                  placeholder="From"
                  date={filterState.from}
                  onDateChange={(date) =>
                    setFilters({ ...filters, from: date })
                  }
                />
                <DatePicker
                  placeholder="To"
                  date={filterState.to}
                  onDateChange={(date) => setFilters({ ...filters, to: date })}
                />
              </div>
            </div>

            <div className="px-6">
              <MultiSelect
                selected={filters.types}
                onChange={(selected) =>
                  setFilters({ ...filters, types: selected })
                }
                placeholder="Select Transaction Type"
                label="Transaction Type"
                options={Object.values(TransactionType).map((type, index) => ({
                  id: index,
                  name: type,
                }))}
              />
            </div>

            <div className="px-6">
              <MultiSelect
                selected={filters.status}
                onChange={(selected) =>
                  setFilters({ ...filters, status: selected })
                }
                placeholder="Select Transaction Status"
                label="Transaction Status"
                options={Object.values(TransactionStatus).map(
                  (type, index) => ({
                    id: index,
                    name: type,
                  })
                )}
              />
            </div>
          </div>

          <div className="flex w-full px-6 mt-auto items-center gap-x-3">
            <Button
              onClick={handleClear}
              type="button"
              wrapperclass="flex-1"
              variant="outline"
            >
              Clear
            </Button>
            <Button
              onClick={() => onApply(filters)}
              type="button"
              wrapperclass="flex-1"
            >
              Apply
            </Button>
          </div>
        </div>
      </motion.div>
    </DialogComponent>
  );
}

export default TransactionsFilter;
