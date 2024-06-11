import * as graphql from "@nestjs/graphql";
import { TransferTransactionResolverBase } from "./base/transferTransaction.resolver.base";
import { TransferTransaction } from "./base/TransferTransaction";
import { TransferTransactionService } from "./transferTransaction.service";

@graphql.Resolver(() => TransferTransaction)
export class TransferTransactionResolver extends TransferTransactionResolverBase {
  constructor(protected readonly service: TransferTransactionService) {
    super(service);
  }
}
