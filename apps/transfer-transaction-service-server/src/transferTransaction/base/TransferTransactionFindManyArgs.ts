/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransferTransactionWhereInput } from "./TransferTransactionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TransferTransactionOrderByInput } from "./TransferTransactionOrderByInput";

@ArgsType()
class TransferTransactionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TransferTransactionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TransferTransactionWhereInput, { nullable: true })
  @Type(() => TransferTransactionWhereInput)
  where?: TransferTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: [TransferTransactionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TransferTransactionOrderByInput], { nullable: true })
  @Type(() => TransferTransactionOrderByInput)
  orderBy?: Array<TransferTransactionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TransferTransactionFindManyArgs as TransferTransactionFindManyArgs };
