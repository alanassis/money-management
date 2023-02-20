import { Module } from '@nestjs/common';
import { ImportTransactionsFile } from '@app/use-cases/import-transactions';
import { ReadNubankFile } from '@app/use-cases/import-transactions/integrations/read-nubank-file';
import { FileController } from './controllers/file.controller';
import { DatabaseModule } from '../databases/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ReadNubankFile, ImportTransactionsFile],
  controllers: [FileController],
})
export class HTTPModule {}
