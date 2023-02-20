import { Injectable } from '@nestjs/common';
import { Transaction } from '@app/entities/Transaction';
import { parse } from 'csv-parse/sync';
import { Category } from '../../../entities/Category';

interface Record {
  Data: string;
  Valor: string;
  Identificador: string;
  Descrição: string;
}

@Injectable()
export class ReadNubankFile {
  public execute({ file }: { file: Buffer }): Transaction[] {
    const records: Record[] = parse(file, { bom: true, columns: true });

    const transactions: Transaction[] = records.map((record) => {
      const date = new Date(
        `${record.Data.split('/').reverse().join('-')} 00:00:00`,
      );

      return new Transaction({
        name: record.Descrição,
        amount: Number(record.Valor),
        category: new Category(),
        performedAt: date,
      });
    });

    return transactions;
  }
}
