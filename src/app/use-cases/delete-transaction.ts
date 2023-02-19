import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from '../repositories/transactions-repository';

interface DeleteTransactionRequest {
  id: string;
}

@Injectable()
export class DeleteTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public async execute({ id }: DeleteTransactionRequest): Promise<void> {
    await this.transactionsRepository.deleteById(id);
  }
}
