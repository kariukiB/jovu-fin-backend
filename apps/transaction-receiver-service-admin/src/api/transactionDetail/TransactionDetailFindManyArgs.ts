import { TransactionDetailWhereInput } from "./TransactionDetailWhereInput";
import { TransactionDetailOrderByInput } from "./TransactionDetailOrderByInput";

export type TransactionDetailFindManyArgs = {
  where?: TransactionDetailWhereInput;
  orderBy?: Array<TransactionDetailOrderByInput>;
  skip?: number;
  take?: number;
};
