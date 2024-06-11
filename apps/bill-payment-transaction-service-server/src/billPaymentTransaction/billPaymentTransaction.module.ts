import { Module } from "@nestjs/common";
import { BillPaymentTransactionModuleBase } from "./base/billPaymentTransaction.module.base";
import { BillPaymentTransactionService } from "./billPaymentTransaction.service";
import { BillPaymentTransactionController } from "./billPaymentTransaction.controller";
import { BillPaymentTransactionResolver } from "./billPaymentTransaction.resolver";

@Module({
  imports: [BillPaymentTransactionModuleBase],
  controllers: [BillPaymentTransactionController],
  providers: [BillPaymentTransactionService, BillPaymentTransactionResolver],
  exports: [BillPaymentTransactionService],
})
export class BillPaymentTransactionModule {}
