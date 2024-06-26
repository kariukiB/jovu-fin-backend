/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BillPaymentTransactionService } from "../billPaymentTransaction.service";
import { BillPaymentTransactionCreateInput } from "./BillPaymentTransactionCreateInput";
import { BillPaymentTransaction } from "./BillPaymentTransaction";
import { BillPaymentTransactionFindManyArgs } from "./BillPaymentTransactionFindManyArgs";
import { BillPaymentTransactionWhereUniqueInput } from "./BillPaymentTransactionWhereUniqueInput";
import { BillPaymentTransactionUpdateInput } from "./BillPaymentTransactionUpdateInput";

export class BillPaymentTransactionControllerBase {
  constructor(protected readonly service: BillPaymentTransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BillPaymentTransaction })
  async createBillPaymentTransaction(
    @common.Body() data: BillPaymentTransactionCreateInput
  ): Promise<BillPaymentTransaction> {
    return await this.service.createBillPaymentTransaction({
      data: data,
      select: {
        amount: true,
        billDetails: true,
        createdAt: true,
        currency: true,
        id: true,
        initiatedAt: true,
        status: true,
        transactionId: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BillPaymentTransaction] })
  @ApiNestedQuery(BillPaymentTransactionFindManyArgs)
  async billPaymentTransactions(
    @common.Req() request: Request
  ): Promise<BillPaymentTransaction[]> {
    const args = plainToClass(
      BillPaymentTransactionFindManyArgs,
      request.query
    );
    return this.service.billPaymentTransactions({
      ...args,
      select: {
        amount: true,
        billDetails: true,
        createdAt: true,
        currency: true,
        id: true,
        initiatedAt: true,
        status: true,
        transactionId: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BillPaymentTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async billPaymentTransaction(
    @common.Param() params: BillPaymentTransactionWhereUniqueInput
  ): Promise<BillPaymentTransaction | null> {
    const result = await this.service.billPaymentTransaction({
      where: params,
      select: {
        amount: true,
        billDetails: true,
        createdAt: true,
        currency: true,
        id: true,
        initiatedAt: true,
        status: true,
        transactionId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BillPaymentTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBillPaymentTransaction(
    @common.Param() params: BillPaymentTransactionWhereUniqueInput,
    @common.Body() data: BillPaymentTransactionUpdateInput
  ): Promise<BillPaymentTransaction | null> {
    try {
      return await this.service.updateBillPaymentTransaction({
        where: params,
        data: data,
        select: {
          amount: true,
          billDetails: true,
          createdAt: true,
          currency: true,
          id: true,
          initiatedAt: true,
          status: true,
          transactionId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BillPaymentTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBillPaymentTransaction(
    @common.Param() params: BillPaymentTransactionWhereUniqueInput
  ): Promise<BillPaymentTransaction | null> {
    try {
      return await this.service.deleteBillPaymentTransaction({
        where: params,
        select: {
          amount: true,
          billDetails: true,
          createdAt: true,
          currency: true,
          id: true,
          initiatedAt: true,
          status: true,
          transactionId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
