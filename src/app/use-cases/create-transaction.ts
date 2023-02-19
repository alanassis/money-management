import { Injectable } from '@nestjs/common';
import { Category } from '../entities/Category';
import { Transaction } from '../entities/Transaction';
import { TransactionsRepository } from '../repositories/transactions-repository';

interface CreateTransactionRequest {
  name: string;
  category: string;
  amount: number;
  performedAt: string;
}

interface CreateTransactionResponse {
  transaction: Transaction;
}

@Injectable()
export class CreateTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public async execute(
    request: CreateTransactionRequest,
  ): Promise<CreateTransactionResponse> {
    const transaction = new Transaction({
      name: request.name,
      category: new Category(request.category),
      amount: request.amount,
      performedAt: new Date(request.performedAt),
    });

    await this.transactionsRepository.create(transaction);

    return { transaction };
  }
}
