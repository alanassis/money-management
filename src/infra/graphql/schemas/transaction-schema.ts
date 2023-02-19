import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TransactionSchema {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  category!: string;

  @Field()
  amount!: number;

  @Field()
  performedAt!: Date;

  @Field()
  createdAt!: Date;
}
