import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransferTransactionWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  initiatedAt?: DateTimeNullableFilter;
  recipientAccount?: StringNullableFilter;
  status?: StringNullableFilter;
  transactionId?: StringNullableFilter;
};
