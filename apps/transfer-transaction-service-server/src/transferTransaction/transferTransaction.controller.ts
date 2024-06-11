import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransferTransactionService } from "./transferTransaction.service";
import { TransferTransactionControllerBase } from "./base/transferTransaction.controller.base";

@swagger.ApiTags("transferTransactions")
@common.Controller("transferTransactions")
export class TransferTransactionController extends TransferTransactionControllerBase {
  constructor(protected readonly service: TransferTransactionService) {
    super(service);
  }
}
