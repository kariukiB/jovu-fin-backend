import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillPaymentTransactionServiceBase } from "./base/billPaymentTransaction.service.base";

@Injectable()
export class BillPaymentTransactionService extends BillPaymentTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
