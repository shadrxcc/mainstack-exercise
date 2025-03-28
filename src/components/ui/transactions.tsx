import Button from "../shared/button";
import Transaction from "./transaction";

const Transactions = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center border-b border-main-lightgrey pb-6 justify-between">
        <div className="space-y-1">
          <h4 className="text-2xl font-bold text-main-black">
            24 Transactions
          </h4>
          <p className="text-sm font-medium text-main-grey">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <Button variant="light-grey" className="!w-fit !px-8">
            Filter <img src="/assets/expand_more.svg" alt="caret down icon" />
          </Button>
          <Button variant="light-grey" className="!w-fit !px-8">
            Export list <img src="/assets/download.svg" alt="download icon" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <Transaction />
      </div>
    </div>
  );
};

export default Transactions;
