import { SortOrder } from "../../util/SortOrder";

export type TransferTransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  initiatedAt?: SortOrder;
  recipientAccount?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
