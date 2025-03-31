import apiClient from "../configs/api";
import { TransactionData, Wallet } from "../models/revenue.model";

export function fetchWallet() {
  return apiClient.get<Wallet>(`/wallet`).then((response) => {
    return response.data;
  });
}

export function fetchTransactions() {
  return apiClient.get<TransactionData[]>(`/transactions`).then((response) => {
    return response.data;
  });
}
