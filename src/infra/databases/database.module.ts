import { Module } from '@nestjs/common';
import { TransactionsRepository } from '@app/repositories/transactions-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTransactionsRepository } from './prisma/repositories/prisma-transactions-repository';
import { IntegrationsImportsRepository } from '../../app/repositories/integrations-imports-repository';
import { PrismaIntegrationsImportsRepository } from './prisma/repositories/prisma-integrations-imports-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TransactionsRepository,
      useClass: PrismaTransactionsRepository,
    },
    {
      provide: IntegrationsImportsRepository,
      useClass: PrismaIntegrationsImportsRepository,
    },
  ],
  exports: [TransactionsRepository, IntegrationsImportsRepository],
})
export class DatabaseModule {}
