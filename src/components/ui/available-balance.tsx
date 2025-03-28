import Button from "../shared/button";

const AvailableBalance = () => {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex">
        <div className="flex items-center gap-x-16">
          <div className="flex flex-col gap-y-2">
            <p className="text-main-grey text-sm font-medium">
              Available Balance
            </p>
            <p className="text-main-black font-bold text-4xl">USD 120,500.00</p>
          </div>

          <Button>Withdraw</Button>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-3xs gap-y-8">
        {balances.map((balance) => (
          <div
            className="flex flex-col w-full gap-y-2.5"
            key={balance.label}
          >
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

const balances = [
  {
    label: "Ledger Balance",
    currency: "USD",
    amount: 0.0,
  },
  {
    label: "Total Payout",
    currency: "USD",
    amount: 55080.0,
  },
  {
    label: "Total Revenue",
    currency: "USD",
    amount: 175580.0,
  },

  {
    label: "Pending Payout",
    currency: "USD",
    amount: 0.0,
  },
];
