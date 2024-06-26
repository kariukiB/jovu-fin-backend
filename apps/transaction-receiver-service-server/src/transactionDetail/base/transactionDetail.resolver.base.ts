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
import { TransactionDetail } from "./TransactionDetail";
import { TransactionDetailCountArgs } from "./TransactionDetailCountArgs";
import { TransactionDetailFindManyArgs } from "./TransactionDetailFindManyArgs";
import { TransactionDetailFindUniqueArgs } from "./TransactionDetailFindUniqueArgs";
import { CreateTransactionDetailArgs } from "./CreateTransactionDetailArgs";
import { UpdateTransactionDetailArgs } from "./UpdateTransactionDetailArgs";
import { DeleteTransactionDetailArgs } from "./DeleteTransactionDetailArgs";
import { TransactionDetailService } from "../transactionDetail.service";
@graphql.Resolver(() => TransactionDetail)
export class TransactionDetailResolverBase {
  constructor(protected readonly service: TransactionDetailService) {}

  async _transactionDetailsMeta(
    @graphql.Args() args: TransactionDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TransactionDetail])
  async transactionDetails(
    @graphql.Args() args: TransactionDetailFindManyArgs
  ): Promise<TransactionDetail[]> {
    return this.service.transactionDetails(args);
  }

  @graphql.Query(() => TransactionDetail, { nullable: true })
  async transactionDetail(
    @graphql.Args() args: TransactionDetailFindUniqueArgs
  ): Promise<TransactionDetail | null> {
    const result = await this.service.transactionDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TransactionDetail)
  async createTransactionDetail(
    @graphql.Args() args: CreateTransactionDetailArgs
  ): Promise<TransactionDetail> {
    return await this.service.createTransactionDetail({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TransactionDetail)
  async updateTransactionDetail(
    @graphql.Args() args: UpdateTransactionDetailArgs
  ): Promise<TransactionDetail | null> {
    try {
      return await this.service.updateTransactionDetail({
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

  @graphql.Mutation(() => TransactionDetail)
  async deleteTransactionDetail(
    @graphql.Args() args: DeleteTransactionDetailArgs
  ): Promise<TransactionDetail | null> {
    try {
      return await this.service.deleteTransactionDetail(args);
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
