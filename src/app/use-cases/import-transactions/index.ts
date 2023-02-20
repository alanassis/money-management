import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from '../../repositories/transactions-repository';
import { ReadNubankFile } from './integrations/read-nubank-file';

interface ImportTransactionsFileRequest {
  provider: string;
  file: Buffer;
}

@Injectable()
export class ImportTransactionsFile {
  constructor(
    private readNubankFile: ReadNubankFile,
    private transactionsRepository: TransactionsRepository,
  ) {}

  public async execute({
    file,
    provider,
  }: ImportTransactionsFileRequest): Promise<void> {
    if (provider === 'NUBANK') {
      const transactions = this.readNubankFile.execute({ file });
      await this.transactionsRepository.createMany(transactions);
    }
  }
}
