import { Injectable } from '@nestjs/common';
import { Transaction } from '@app/entities/Transaction';
import { TransactionsRepository } from '@app/repositories/transactions-repository';
import { PrismaService } from '../prisma.service';
import { PrismaTransactionMapper } from '../mappers/prisma-transaction-mapper';

@Injectable()
export class PrismaTransactionsRepository implements TransactionsRepository {
  constructor(private prisma: PrismaService) {}

  async getById(id: string): Promise<Transaction | null> {
    const rawNotification = await this.prisma.transaction.findUnique({
      where: {
        id,
      },
    });

    if (!rawNotification) {
      return null;
    }

    return PrismaTransactionMapper.toDomain(rawNotification);
  }

  async find(): Promise<Transaction[]> {
    const rawTransactions = await this.prisma.transaction.findMany();
    const transactions = rawTransactions.map(PrismaTransactionMapper.toDomain);

    return transactions;
  }

  async create(transaction: Transaction): Promise<void> {
    const rawNotification = PrismaTransactionMapper.toPrisma(transaction);
    await this.prisma.transaction.create({
      data: rawNotification,
    });
  }

  async createMany(transactions: Transaction[]): Promise<void> {
    const rawNotifications = transactions.map(PrismaTransactionMapper.toPrisma);
    await this.prisma.transaction.createMany({ data: rawNotifications });
  }

  async update(transaction: Transaction): Promise<void> {
    const rawNotification = PrismaTransactionMapper.toPrisma(transaction);
    await this.prisma.transaction.update({
      where: {
        id: transaction.id,
      },
      data: rawNotification,
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.transaction.delete({ where: { id } });
  }
}
