import { Transaction } from '@app/entities/Transaction';
import { Category } from '@app/entities/Category';
import { Transaction as RawTransaction } from '@prisma/client';

export class PrismaTransactionMapper {
  public static toPrisma(transaction: Transaction): RawTransaction {
    return {
      id: transaction.id,
      name: transaction.name,
      category: transaction.category.value,
      amount: transaction.amount,
      performedAt: transaction.performedAt,
      createdAt: transaction.createdAt,
    };
  }

  public static toDomain(raw: RawTransaction): Transaction {
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
