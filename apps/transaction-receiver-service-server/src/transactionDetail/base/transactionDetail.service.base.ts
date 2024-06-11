/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  TransactionDetail as PrismaTransactionDetail,
} from "@prisma/client";

export class TransactionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TransactionDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.transactionDetail.count(args);
  }

  async transactionDetails<T extends Prisma.TransactionDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDetailFindManyArgs>
  ): Promise<PrismaTransactionDetail[]> {
    return this.prisma.transactionDetail.findMany<Prisma.TransactionDetailFindManyArgs>(
      args
    );
  }
  async transactionDetail<T extends Prisma.TransactionDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDetailFindUniqueArgs>
  ): Promise<PrismaTransactionDetail | null> {
    return this.prisma.transactionDetail.findUnique(args);
  }
  async createTransactionDetail<T extends Prisma.TransactionDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDetailCreateArgs>
  ): Promise<PrismaTransactionDetail> {
    return this.prisma.transactionDetail.create<T>(args);
  }
  async updateTransactionDetail<T extends Prisma.TransactionDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDetailUpdateArgs>
  ): Promise<PrismaTransactionDetail> {
    return this.prisma.transactionDetail.update<T>(args);
  }
  async deleteTransactionDetail<T extends Prisma.TransactionDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDetailDeleteArgs>
  ): Promise<PrismaTransactionDetail> {
    return this.prisma.transactionDetail.delete(args);
  }
}