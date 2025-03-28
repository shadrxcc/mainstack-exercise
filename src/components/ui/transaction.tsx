const Transaction = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3.5">
        <span className="h-12 rounded-full w-12 inline-flex items-center justify-center bg-[#E3FCF2]">
          <img src="/assets/call_made.svg" alt="outgoing" />
        </span>
        <div className="flex flex-col gap-y-1.5">
          <p className="font-medium text-main-black text-base">
            Psychology of Money
          </p>
          <p className="text-main-grey font-medium text-sm">Roy Cash</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 text-end">
        <p className="text-main-black font-bold text-base">USD 600</p>
        <p className="text-main-grey font-medium text-sm">Apr 03,2022</p>
      </div>
    </div>
  );
};

export default Transaction;
