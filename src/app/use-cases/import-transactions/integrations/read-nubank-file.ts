import { Injectable } from '@nestjs/common';
import { Transaction } from '@app/entities/Transaction';
import { parse } from 'csv-parse/sync';
import { Category } from '../../../entities/Category';
import { IntegrationsImportsRepository } from '../../../repositories/integrations-imports-repository';
import { PTBRStringToDate } from '../../../../helpers/DateParser';
import { IntegrationImport } from '../../../entities/IntegrationImport';

interface Record {
  Data: string;
  Valor: string;
  Identificador: string;
  Descrição: string;
}

interface Request {
  file: Buffer;
  provider: string;
}

@Injectable()
export class ReadNubankFile {
  constructor(private importsRepository: IntegrationsImportsRepository) {}

  public async execute({ file, provider }: Request): Promise<Transaction[]> {
    const records: Record[] = parse(file, { bom: true, columns: true });

    const processedIds = await this.importsRepository.getProcessedExternalIds(
      records.map((record) => record.Identificador),
    );

    const transactions: Transaction[] = [];
    const imports: IntegrationImport[] = [];

    for (const record of records) {
      if (processedIds.includes(record.Identificador)) {
        continue;
      }

      transactions.push(
        new Transaction({
          name: record.Descrição,
          amount: Number(record.Valor),
          category: new Category(),
          performedAt: PTBRStringToDate(record.Data),
        }),
      );

      imports.push(
        new IntegrationImport({
          externalId: record.Identificador,
          provider,
        }),
      );
    }

    await this.importsRepository.createMany(imports);

    return transactions;
  }
}
