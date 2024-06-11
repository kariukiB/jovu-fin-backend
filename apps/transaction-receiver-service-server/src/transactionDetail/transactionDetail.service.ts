import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionDetailServiceBase } from "./base/transactionDetail.service.base";

@Injectable()
export class TransactionDetailService extends TransactionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
