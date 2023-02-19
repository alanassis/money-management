import { Module } from '@nestjs/common';
import { TransactionsRepository } from '@app/repositories/transactions-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTransactionsRepository } from './prisma/repositories/prisma-transactions-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TransactionsRepository,
      useClass: PrismaTransactionsRepository,
    },
  ],
  exports: [TransactionsRepository],
})
export class DatabaseModule {}
