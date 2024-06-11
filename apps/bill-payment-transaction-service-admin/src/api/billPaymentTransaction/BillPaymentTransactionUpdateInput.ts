import { InputJsonValue } from "../../types";

export type BillPaymentTransactionUpdateInput = {
  amount?: number | null;
  billDetails?: InputJsonValue;
  currency?: string | null;
  initiatedAt?: Date | null;
  status?: string | null;
  transactionId?: string | null;
};
