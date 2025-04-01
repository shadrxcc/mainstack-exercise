export enum NavLinks {
  Home = "Home",
  Analytics = "Analytics",
  Revenue = "Revenue",
  CRM = "CRM",
  Apps = "Apps",
}

export const NavIcons: Record<NavLinks, string> = {
  [NavLinks.Home]: "/assets/home.svg",
  [NavLinks.Analytics]: "/assets/insert_chart.svg",
  [NavLinks.Revenue]: "/assets/payments.svg",
  [NavLinks.CRM]: "/assets/group.svg",
  [NavLinks.Apps]: "/assets/widgets.svg",
};

export enum Period {
  Today = "Today",
  Last7Days = "Last 7 Days",
  ThisMonth = "This Month",
  Last3Months = "Last 3 Months",
  Thisyear = "This Year",
  LastYear = "Last Year",
  AllTime = "All Time",
}

export enum TransactionType {
  StoreTransactions = "Store Transactions",
  GetTipped = "Get Tipped",
  Withdrawals = "Withdrawals",
  Chargebacks = "Chargebacks",
  Cashbacks = "Cashbacks",
  ReferAndEarn = "Refer & Earn",
  Deposit = "Deposit"
}

export enum TransactionStatus {
  Successful = "Successful",
  Pending = "Pending",
  Failed = "Failed",
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}
