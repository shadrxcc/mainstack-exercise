import { useState } from "react";
import Button from "../shared/button";
import Transaction from "./transaction";
import TransactionsFilter from "./transactions-filter";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../services/apis/revenue";
import NoMatchingTransaction from "./no-matching-transaction";
import { Period } from "../../services/models/shared.model";
import { Option } from "../shared/multi-select";
import { TransactionData } from "../../services/models/revenue.model";

export interface FilterState {
  period: Period | null;
  from: Date | undefined;
  to: Date | undefined;
  types: Option[];
  status: Option[];
}

const initialFilterState: FilterState = {
  period: null,
  from: undefined,
  to: undefined,
  types: [],
  status: [],
};

const Transactions = () => {
  const [openFilter, setFilter] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setFilter(false);
  };

  const handleClearFilters = () => {
    setFilters(initialFilterState);
  };

  const filterTransactions = (
    transactions: TransactionData[] | undefined,
    filters: FilterState
  ) => {
    if (!transactions) return transactions;
    const today = new Date();
    const periodMapping: Record<Period, (date: Date) => boolean> = {
      [Period.Today]: (d) => d.toDateString() === today.toDateString(),
      [Period.Last7Days]: (d) =>
        d >=
        new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
      [Period.ThisMonth]: (d) =>
        d >= new Date(today.getFullYear(), today.getMonth(), 1),
      [Period.Last3Months]: (d) =>
        d >=
        new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()),
      [Period.Thisyear]: (d) => d >= new Date(today.getFullYear(), 0, 1),
      [Period.LastYear]: (d) =>
        d >= new Date(today.getFullYear() - 1, 0, 1) &&
        d <= new Date(today.getFullYear() - 1, 11, 31),
      [Period.AllTime]: () => true,
    };

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      if (
        filters.period &&
        periodMapping[filters.period] &&
        !periodMapping[filters.period](transactionDate)
      )
        return false;
      if (filters.from && transactionDate < new Date(filters.from))
        return false;
      if (filters.to && transactionDate > new Date(filters.to)) return false;
      if (
        filters.types.length &&
        !filters.types.some(
          (t: Option) => t.name.toLowerCase() === transaction.type.toLowerCase()
        )
      )
        return false;
      if (
        filters.status.length &&
        !filters.status.some(
          (s: Option) =>
            s.name.toLowerCase() === transaction.status.toLowerCase()
        )
      )
        return false;
      return true;
    });
  };

  const countActiveFilters = (filters: FilterState) => {
    let count = 0;
    if (filters.period) count++;
    if (filters.from) count++;
    if (filters.to) count++;
    if (filters.types && filters.types.length > 0) count++;
    if (filters.status && filters.status.length > 0) count++;
    return count;
  };

  const filteredTransactions = filterTransactions(transactions, filters);
  const hasTransactions =
    filteredTransactions && filteredTransactions.length > 0;

  return (
    <div className="flex flex-col w-full gap-y-8">
      <div className="flex items-center flex-wrap gap-6 border-b border-main-lightgrey pb-6 justify-between">
        <div className="space-y-1">
          <h4 className="text-2xl font-bold text-main-black">
            {filteredTransactions?.length || 0} Transactions
          </h4>
          <p className="text-sm font-medium text-main-grey">
            Your transactions for{" "}
            {filters?.period ? filters.period : "the last 7 days"}
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <Button
            onClick={() => setFilter(true)}
            variant="light-grey"
            className="!w-fit !px-8"
          >
            Filter{" "}
            {countActiveFilters(filters) > 0 && (
              <span className="bg-main-black text-white text-xs font-medium w-5 h-5 inline-flex items-center justify-center rounded-full">
                {countActiveFilters(filters)}
              </span>
            )}{" "}
            <img src="/assets/expand_more.svg" alt="caret down icon" />
          </Button>

          <TransactionsFilter
            onClose={() => setFilter(false)}
            filterState={filters}
            isOpen={openFilter}
            onApply={handleApplyFilters}
          />

          <Button variant="light-grey" className="!w-fit !px-8">
            Export list <img src="/assets/download.svg" alt="download icon" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        {hasTransactions ? (
          filteredTransactions.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))
        ) : (
          <NoMatchingTransaction handleClear={handleClearFilters} />
        )}
      </div>
    </div>
  );
};

export default Transactions;
