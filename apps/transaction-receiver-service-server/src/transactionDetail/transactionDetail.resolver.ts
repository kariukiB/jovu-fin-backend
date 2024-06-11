import * as graphql from "@nestjs/graphql";
import { TransactionDetailResolverBase } from "./base/transactionDetail.resolver.base";
import { TransactionDetail } from "./base/TransactionDetail";
import { TransactionDetailService } from "./transactionDetail.service";

@graphql.Resolver(() => TransactionDetail)
export class TransactionDetailResolver extends TransactionDetailResolverBase {
  constructor(protected readonly service: TransactionDetailService) {
    super(service);
  }
}
