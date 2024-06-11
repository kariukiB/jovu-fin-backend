import { Module } from "@nestjs/common";
import { TransactionDetailModuleBase } from "./base/transactionDetail.module.base";
import { TransactionDetailService } from "./transactionDetail.service";
import { TransactionDetailController } from "./transactionDetail.controller";
import { TransactionDetailResolver } from "./transactionDetail.resolver";

@Module({
  imports: [TransactionDetailModuleBase],
  controllers: [TransactionDetailController],
  providers: [TransactionDetailService, TransactionDetailResolver],
  exports: [TransactionDetailService],
})
export class TransactionDetailModule {}
