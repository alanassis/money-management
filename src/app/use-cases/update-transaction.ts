import { Injectable } from '@nestjs/common';
import { Category } from '../entities/Category';
import { Transaction } from '../entities/Transaction';
import { TransactionsRepository } from '../repositories/transactions-repository';

interface UpdateTransactionRequest {
  id: string;
  data: {
    name: string;
    category: string;
    amount: number;
    performedAt: string;
  };
}

interface UpdateTransactionResponse {
  transaction: Transaction;
}

@Injectable()
export class UpdateTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public async execute(
    request: UpdateTransactionRequest,
  ): Promise<UpdateTransactionResponse> {
    const transaction = await this.transactionsRepository.getById(request.id);

    if (!transaction) {
      throw new Error('Transaction not found.');
    }

    const { name, category, amount, performedAt } = request.data;
    transaction.name = name ?? transaction.name;
    transaction.amount = amount ?? transaction.amount;

    transaction.performedAt = performedAt
      ? new Date(performedAt)
      : transaction.performedAt;

    transaction.category = category
      ? new Category(category)
      : transaction.category;

    await this.transactionsRepository.update(transaction);
    return { transaction };
  }
}
