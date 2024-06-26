/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BillPaymentTransaction } from "./BillPaymentTransaction";
import { BillPaymentTransactionCountArgs } from "./BillPaymentTransactionCountArgs";
import { BillPaymentTransactionFindManyArgs } from "./BillPaymentTransactionFindManyArgs";
import { BillPaymentTransactionFindUniqueArgs } from "./BillPaymentTransactionFindUniqueArgs";
import { CreateBillPaymentTransactionArgs } from "./CreateBillPaymentTransactionArgs";
import { UpdateBillPaymentTransactionArgs } from "./UpdateBillPaymentTransactionArgs";
import { DeleteBillPaymentTransactionArgs } from "./DeleteBillPaymentTransactionArgs";
import { BillPaymentTransactionService } from "../billPaymentTransaction.service";
@graphql.Resolver(() => BillPaymentTransaction)
export class BillPaymentTransactionResolverBase {
  constructor(protected readonly service: BillPaymentTransactionService) {}

  async _billPaymentTransactionsMeta(
    @graphql.Args() args: BillPaymentTransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BillPaymentTransaction])
  async billPaymentTransactions(
    @graphql.Args() args: BillPaymentTransactionFindManyArgs
  ): Promise<BillPaymentTransaction[]> {
    return this.service.billPaymentTransactions(args);
  }

  @graphql.Query(() => BillPaymentTransaction, { nullable: true })
  async billPaymentTransaction(
    @graphql.Args() args: BillPaymentTransactionFindUniqueArgs
  ): Promise<BillPaymentTransaction | null> {
    const result = await this.service.billPaymentTransaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BillPaymentTransaction)
  async createBillPaymentTransaction(
    @graphql.Args() args: CreateBillPaymentTransactionArgs
  ): Promise<BillPaymentTransaction> {
    return await this.service.createBillPaymentTransaction({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BillPaymentTransaction)
  async updateBillPaymentTransaction(
    @graphql.Args() args: UpdateBillPaymentTransactionArgs
  ): Promise<BillPaymentTransaction | null> {
    try {
      return await this.service.updateBillPaymentTransaction({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BillPaymentTransaction)
  async deleteBillPaymentTransaction(
    @graphql.Args() args: DeleteBillPaymentTransactionArgs
  ): Promise<BillPaymentTransaction | null> {
    try {
      return await this.service.deleteBillPaymentTransaction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
