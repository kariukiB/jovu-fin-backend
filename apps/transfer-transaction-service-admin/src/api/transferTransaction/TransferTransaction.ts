export type TransferTransaction = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  initiatedAt: Date | null;
  recipientAccount: string | null;
  status: string | null;
  transactionId: string | null;
  updatedAt: Date;
};
