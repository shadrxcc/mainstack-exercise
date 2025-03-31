import { useState } from "react";
import Button from "../shared/button";
import Transaction from "./transaction";
import TransactionsFilter from "./transactions-filter";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../services/apis/revenue";
import NoMatchingTransaction from "./no-matching-transaction";

const Transactions = () => {
  const [openFilter, setFilter] = useState(false);

  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  return (
    <div className="flex flex-col w-full gap-y-8">
      <div className="flex items-center flex-wrap gap-6 border-b border-main-lightgrey pb-6 justify-between">
        <div className="space-y-1">
          <h4 className="text-2xl font-bold text-main-black">
            {transactions?.length || 0} Transactions
          </h4>
          <p className="text-sm font-medium text-main-grey">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <Button
            onClick={() => setFilter(true)}
            variant="light-grey"
            className="!w-fit !px-8"
          >
            Filter <img src="/assets/expand_more.svg" alt="caret down icon" />
          </Button>

          <TransactionsFilter
            onClose={() => setFilter(false)}
            isOpen={openFilter}
          />

          <Button variant="light-grey" className="!w-fit !px-8">
            Export list <img src="/assets/download.svg" alt="download icon" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        {transactions &&
          transactions?.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))}
      </div>

      <NoMatchingTransaction />
    </div>
  );
};

export default Transactions;
