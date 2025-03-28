import AvailableBalance from "../components/ui/available-balance";
import Transactions from "../components/ui/transactions";

function Revenue() {
  return (
    <div className="flex flex-col gap-y-20">
      <AvailableBalance />
      <Transactions />
    </div>
  );
}

export default Revenue;
