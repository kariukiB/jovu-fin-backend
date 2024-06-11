/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransactionDetailWhereInput } from "./TransactionDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TransactionDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TransactionDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionDetailWhereInput)
  @IsOptional()
  @Field(() => TransactionDetailWhereInput, {
    nullable: true,
  })
  every?: TransactionDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => TransactionDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionDetailWhereInput)
  @IsOptional()
  @Field(() => TransactionDetailWhereInput, {
    nullable: true,
  })
  some?: TransactionDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => TransactionDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionDetailWhereInput)
  @IsOptional()
  @Field(() => TransactionDetailWhereInput, {
    nullable: true,
  })
  none?: TransactionDetailWhereInput;
}
export { TransactionDetailListRelationFilter as TransactionDetailListRelationFilter };