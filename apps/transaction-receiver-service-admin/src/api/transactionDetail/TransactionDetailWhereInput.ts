import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionDetailWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
  transactionType?: StringNullableFilter;
};
