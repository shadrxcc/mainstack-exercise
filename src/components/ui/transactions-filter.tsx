import { motion } from "framer-motion";
import DialogComponent from "../shared/custom-dialog";
import Button from "../shared/button";
import {
  Period,
  TransactionStatus,
  TransactionType,
} from "../../services/models/shared.model";
import { useState } from "react";
import clsx from "clsx";
import { DatePicker } from "../shared/datepicker";
import { MultiSelect, Option } from "../shared/multi-select";

function TransactionsFilter({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const [filterperiod, setFilterPeriod] = useState<Period | null>(Period.Today);
  const [from, setFrom] = useState<Date | undefined>(new Date());
  const [to, setTo] = useState<Date | undefined>(new Date());
  const [transactionType, setTransactionType] = useState<Option[]>([]);
  const [transactionStatus, setTransactionStatus] = useState<Option[]>([]);

  return (
    <DialogComponent isOpen={isOpen} onClose={onClose}>
      <motion.div
        className="sm:max-w-[456px] fixed flex flex-col right-0 min-h-[98%] w-full bg-white rounded-[20px] shadow-custom-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: -10 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex items-center px-6 py-[22px] justify-between">
          <h1 className="text-2xl font-bold text-main-black">Filter</h1>

          <Button
            variant="none"
            onClick={onClose}
            className="!p-0 ml-auto !w-fit"
          >
            <img src="/assets/close.svg" alt="close icon" />
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-between pb-5 px-6">
          <div className="flex flex-col gap-y-6">
            <motion.div
              className="flex overflow-auto ease-in-out items-center gap-x-3"
              transition={{ ease: "easeInOut", duration: 0.7 }}
            >
              {Object.values(Period).map((period) => (
                <Button
                  onClick={() => {
                    if (filterperiod === period) {
                      setFilterPeriod(null);
                    } else {
                      setFilterPeriod(period);
                    }
                  }}
                  key={period}
                  variant={filterperiod === period ? "solid" : "light-grey"}
                  className={clsx(
                    "!py-2.5 !px-[18px] !whitespace-nowrap transition ease-in-out duration-500",
                    `${
                      filterperiod === period
                        ? "bg-main-black"
                        : "hover:!bg-main-lightgrey !border !border-main-lightgrey"
                    }`
                  )}
                >
                  {period}
                </Button>
              ))}
            </motion.div>

            <div className="flex flex-col gap-y-3">
              <p className="font-semibold text-base text-main-grey">
                Date Range
              </p>
              <div className="flex items-center gap-x-1.5">
                <DatePicker
                  date={from}
                  onDateChange={(date) => setFrom(date)}
                />
                <DatePicker date={to} onDateChange={(date) => setTo(date)} />
              </div>
            </div>

            <MultiSelect
              selected={transactionType}
              onChange={setTransactionType}
              placeholder="Select Transaction Type"
              label="Transaction Type"
              options={Object.values(TransactionType).map((type, index) => ({
                id: index,
                name: type,
              }))}
            />

            <MultiSelect
              selected={transactionStatus}
              onChange={setTransactionStatus}
              placeholder="Select Transaction Status"
              label="Transaction Status"
              options={Object.values(TransactionStatus).map((type, index) => ({
                id: index,
                name: type,
              }))}
            />
          </div>

          <div className="flex w-full  mt-auto items-center gap-x-3">
            <Button wrapperclass="flex-1" variant="outline">
              Clear
            </Button>
            <Button wrapperclass="flex-1">Apply</Button>
          </div>
        </div>
      </motion.div>
    </DialogComponent>
  );
}

export default TransactionsFilter;
