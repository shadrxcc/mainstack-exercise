const TransactionLoader = () => {
  return (
    <div className="flex items-center justify-between transition-all duration-500 ease-in-out animate-pulse">
      <div className="flex items-center gap-x-3.5">
        <span className="h-12 w-12 rounded-full bg-main-lightgrey"></span>

        <div className="flex flex-col gap-y-1.5">
          <div className="h-4 w-32 bg-main-lightgrey rounded-md"></div>
          <div className="h-3 w-20 bg-main-lightgrey rounded-md"></div>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 text-end">
        <div className="h-4 w-20 bg-main-lightgrey rounded-md"></div>
        <div className="h-3 w-16 bg-main-lightgrey rounded-md"></div>
      </div>
    </div>
  );
};

export default TransactionLoader;
