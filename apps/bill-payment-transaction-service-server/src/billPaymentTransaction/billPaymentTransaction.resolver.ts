import * as graphql from "@nestjs/graphql";
import { BillPaymentTransactionResolverBase } from "./base/billPaymentTransaction.resolver.base";
import { BillPaymentTransaction } from "./base/BillPaymentTransaction";
import { BillPaymentTransactionService } from "./billPaymentTransaction.service";

@graphql.Resolver(() => BillPaymentTransaction)
export class BillPaymentTransactionResolver extends BillPaymentTransactionResolverBase {
  constructor(protected readonly service: BillPaymentTransactionService) {
    super(service);
  }
}
