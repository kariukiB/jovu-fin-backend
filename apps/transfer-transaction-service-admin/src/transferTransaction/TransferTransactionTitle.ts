import { TransferTransaction as TTransferTransaction } from "../api/transferTransaction/TransferTransaction";

export const TRANSFERTRANSACTION_TITLE_FIELD = "currency";

export const TransferTransactionTitle = (
  record: TTransferTransaction
): string => {
  return record.currency?.toString() || String(record.id);
};
