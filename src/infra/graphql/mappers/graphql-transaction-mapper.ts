import { Transaction } from '@app/entities/Transaction';
import { Category } from '@app/entities/Category';
import { TransactionSchema } from '../schemas/transaction-schema';

export class GraphQLTransactionMapper {
  public static toGraphQL(transaction: Transaction): TransactionSchema {
    return {
      id: transaction.id,
      name: transaction.name,
      category: transaction.category.value,
      amount: transaction.amount,
      performedAt: transaction.performedAt,
      createdAt: transaction.createdAt,
    };
  }

  public static toDomain(raw: TransactionSchema): Transaction {
    return new Transaction(
      {
        name: raw.name,
        category: new Category(raw.category),
        amount: raw.amount,
        performedAt: raw.performedAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
