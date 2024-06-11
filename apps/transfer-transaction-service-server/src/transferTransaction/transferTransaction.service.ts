import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransferTransactionServiceBase } from "./base/transferTransaction.service.base";

@Injectable()
export class TransferTransactionService extends TransferTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
