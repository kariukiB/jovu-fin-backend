import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BillPaymentTransactionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BillPaymentTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <TextField label="billDetails" source="billDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="ID" source="id" />
        <TextField label="initiatedAt" source="initiatedAt" />
        <TextField label="status" source="status" />
        <TextField label="transactionId" source="transactionId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
