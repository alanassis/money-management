import { Transaction } from '../entities/Transaction';

export abstract class TransactionsRepository {
  abstract getById(id: string): Promise<Transaction | null>;
  abstract find(): Promise<Transaction[]>;
  abstract create(transaction: Transaction): Promise<void>;
  abstract update(transaction: Transaction): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
