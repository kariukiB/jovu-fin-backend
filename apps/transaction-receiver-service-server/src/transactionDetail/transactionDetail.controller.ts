import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionDetailService } from "./transactionDetail.service";
import { TransactionDetailControllerBase } from "./base/transactionDetail.controller.base";

@swagger.ApiTags("transactionDetails")
@common.Controller("transactionDetails")
export class TransactionDetailController extends TransactionDetailControllerBase {
  constructor(protected readonly service: TransactionDetailService) {
    super(service);
  }
}
