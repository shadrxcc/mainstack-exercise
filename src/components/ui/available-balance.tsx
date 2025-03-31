import { useQuery } from "@tanstack/react-query";
import Button from "../shared/button";
import { fetchWallet } from "../../services/apis/revenue";
import RevenueGraph from "./revenue-graph";

const AvailableBalance = () => {
  const { data: wallet } = useQuery({
    queryKey: ["wallet"],
    queryFn: fetchWallet,
  });

  const balances = [
    {
      label: "Ledger Balance",
      currency: "USD",
      amount: wallet?.ledger_balance || 0,
    },
    {
      label: "Total Payout",
      currency: "USD",
      amount: wallet?.total_payout || 0,
    },
    {
      label: "Total Revenue",
      currency: "USD",
      amount: wallet?.total_revenue || 0,
    },
    {
      label: "Pending Payout",
      currency: "USD",
      amount: wallet?.pending_payout || 0,
    },
  ];

  return (
    <div className="flex justify-between max-w-7xl mx-auto gap-5 flex-col sm:flex-row items-start w-full">
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-wrap gap-y-6 items-center gap-x-16">
          <div className="flex flex-col gap-y-2">
            <p className="text-main-grey text-sm font-medium">
              Available Balance
            </p>
            <p className="text-main-black font-bold text-4xl overflow-hidden">
              USD {wallet?.balance || 0}
            </p>
          </div>

          <Button>Withdraw</Button>
        </div>

        <RevenueGraph />
      </div>

      <div className="flex flex-col w-full sm:max-w-3xs gap-y-8">
        {balances.map((balance) => (
          <div className="flex flex-col w-full gap-y-2.5" key={balance.label}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-main-grey">
                {balance.label}
              </p>

              <img src="/assets/info.svg" alt="info icon" />
            </div>

            <p className="text-main-black text-[28px] font-bold">
              {balance.currency} {balance.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableBalance;
