import React from "react";
import { TransactionData } from "../../services/models/revenue.model";
import { format } from "date-fns";
import clsx from "clsx";

const Transaction: React.FC<TransactionData> = ({
  metadata,
  amount,
  date,
  type,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3.5">
        <span
          className={clsx(
            "h-12 rounded-full w-12 inline-flex items-center justify-center",
            {
              "bg-[#E3FCF2]": type === "deposit",
              "bg-[#F9E3E0]": type === "withdrawal",
            }
          )}
        >
          {type === "deposit" ? (
            <img src="/assets/call_received.svg" alt="incoming" />
          ) : (
            <img src="/assets/call_made.svg" alt="outgoing" />
          )}
        </span>
        <div className="flex flex-col gap-y-1.5">
          <p className="font-medium text-main-black text-base">
            {metadata?.product_name || "NIL"}
          </p>
          <p className="text-main-grey font-medium text-sm">
            {metadata?.name || "NIL"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 text-end">
        <p className="text-main-black font-bold text-base">USD {amount || 0}</p>
        <p className="text-main-grey font-medium text-sm">
          {date && format(date, "MMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
