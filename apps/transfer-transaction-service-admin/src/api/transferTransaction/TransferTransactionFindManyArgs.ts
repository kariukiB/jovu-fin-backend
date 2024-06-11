import { TransferTransactionWhereInput } from "./TransferTransactionWhereInput";
import { TransferTransactionOrderByInput } from "./TransferTransactionOrderByInput";

export type TransferTransactionFindManyArgs = {
  where?: TransferTransactionWhereInput;
  orderBy?: Array<TransferTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
