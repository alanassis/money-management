import { Injectable } from '@nestjs/common';
import { Transaction } from '../entities/Transaction';
import { TransactionsRepository } from '../repositories/transactions-repository';

interface ListTransactionsResponse {
  transactions: Transaction[];
}

@Injectable()
export class ListTransactions {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public async execute(): Promise<ListTransactionsResponse> {
    const transactions = await this.transactionsRepository.find();
    return { transactions };
  }
}
