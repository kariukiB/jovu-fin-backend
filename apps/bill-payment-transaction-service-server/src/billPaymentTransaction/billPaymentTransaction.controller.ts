import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BillPaymentTransactionService } from "./billPaymentTransaction.service";
import { BillPaymentTransactionControllerBase } from "./base/billPaymentTransaction.controller.base";

@swagger.ApiTags("billPaymentTransactions")
@common.Controller("billPaymentTransactions")
export class BillPaymentTransactionController extends BillPaymentTransactionControllerBase {
  constructor(protected readonly service: BillPaymentTransactionService) {
    super(service);
  }
}
