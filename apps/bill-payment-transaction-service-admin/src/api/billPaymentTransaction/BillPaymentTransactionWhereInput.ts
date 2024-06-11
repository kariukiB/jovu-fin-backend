import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BillPaymentTransactionWhereInput = {
  amount?: FloatNullableFilter;
  billDetails?: JsonFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  initiatedAt?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  transactionId?: StringNullableFilter;
};
