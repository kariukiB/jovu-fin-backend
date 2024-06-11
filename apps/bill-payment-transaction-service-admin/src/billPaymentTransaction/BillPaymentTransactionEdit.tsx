import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BillPaymentTransactionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <div />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="initiatedAt" source="initiatedAt" />
        <TextInput label="status" source="status" />
        <TextInput label="transactionId" source="transactionId" />
      </SimpleForm>
    </Edit>
  );
};
