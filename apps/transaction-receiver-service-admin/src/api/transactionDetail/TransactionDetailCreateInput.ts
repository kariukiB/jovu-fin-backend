export type TransactionDetailCreateInput = {
  amount?: number | null;
  currency?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  transactionId?: string | null;
  transactionType?: string | null;
};
