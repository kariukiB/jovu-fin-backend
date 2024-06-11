import { BillPaymentTransactionWhereInput } from "./BillPaymentTransactionWhereInput";
import { BillPaymentTransactionOrderByInput } from "./BillPaymentTransactionOrderByInput";

export type BillPaymentTransactionFindManyArgs = {
  where?: BillPaymentTransactionWhereInput;
  orderBy?: Array<BillPaymentTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
