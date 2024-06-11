import { Module } from "@nestjs/common";
import { TransferTransactionModuleBase } from "./base/transferTransaction.module.base";
import { TransferTransactionService } from "./transferTransaction.service";
import { TransferTransactionController } from "./transferTransaction.controller";
import { TransferTransactionResolver } from "./transferTransaction.resolver";

@Module({
  imports: [TransferTransactionModuleBase],
  controllers: [TransferTransactionController],
  providers: [TransferTransactionService, TransferTransactionResolver],
  exports: [TransferTransactionService],
})
export class TransferTransactionModule {}
