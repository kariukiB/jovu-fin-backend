import { SortOrder } from "../../util/SortOrder";

export type TransactionDetailOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  transactionId?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
