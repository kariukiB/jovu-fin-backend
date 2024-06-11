import { SortOrder } from "../../util/SortOrder";

export type BillPaymentTransactionOrderByInput = {
  amount?: SortOrder;
  billDetails?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  initiatedAt?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
