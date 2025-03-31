import Button from "../shared/button";

const NoMatchingTransaction = () => {
  return (
    <div className="flex flex-col gap-y-8 max-w-[369px] mx-auto">
      <span className="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-main-lightgrey">
        <img src="/assets/receipt_long.svg" alt="receipt icon" />
      </span>

      <div className="flex flex-col gap-y-2.5">
        <h1 className="text-[28px] font-bold text-main-black">
          No matching transaction found for the selected filter
        </h1>
        <p className="text-base font-medium text-main-grey">
          Change your filters to see more results, or add a new product.
        </p>
      </div>

      <Button variant="light-grey" className="!w-fit">Clear Filter</Button>
    </div>
  );
};

export default NoMatchingTransaction;
