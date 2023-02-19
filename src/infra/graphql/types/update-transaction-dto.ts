import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTransactionInput {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  category!: string;

  @Field()
  amount!: number;

  @Field()
  performedAt!: string;
}
