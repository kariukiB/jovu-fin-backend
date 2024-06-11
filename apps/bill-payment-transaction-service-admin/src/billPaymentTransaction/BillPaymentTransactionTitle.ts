import { BillPaymentTransaction as TBillPaymentTransaction } from "../api/billPaymentTransaction/BillPaymentTransaction";

export const BILLPAYMENTTRANSACTION_TITLE_FIELD = "currency";

export const BillPaymentTransactionTitle = (
  record: TBillPaymentTransaction
): string => {
  return record.currency?.toString() || String(record.id);
};
