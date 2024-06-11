import { JsonValue } from "type-fest";

export type BillPaymentTransaction = {
  amount: number | null;
  billDetails: JsonValue;
  createdAt: Date;
  currency: string | null;
  id: string;
  initiatedAt: Date | null;
  status: string | null;
  transactionId: string | null;
  updatedAt: Date;
};
