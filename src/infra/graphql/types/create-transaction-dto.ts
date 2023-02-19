import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field()
  name!: string;

  @Field()
  category!: string;

  @Field()
  amount!: number;

  @Field()
  performedAt!: string;
}
