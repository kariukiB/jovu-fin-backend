import { TransactionDetail as TTransactionDetail } from "../api/transactionDetail/TransactionDetail";

export const TRANSACTIONDETAIL_TITLE_FIELD = "currency";

export const TransactionDetailTitle = (record: TTransactionDetail): string => {
  return record.currency?.toString() || String(record.id);
};
