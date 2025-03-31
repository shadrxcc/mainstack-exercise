export interface Wallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
}

export type TransactionStatus = "successful" | "pending" | "failed";
export type TransactionType = "deposit" | "withdrawal";

export interface TransactionData {
  amount: number;
  metadata?: TransactionMetadata;
  payment_reference?: string;
  status: "successful" | "pending" | "failed";
  type: "deposit" | "withdrawal";
  date: Date;
}
