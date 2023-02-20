import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportTransactionsFile } from '@app/use-cases/import-transactions';

@Controller('files')
export class FileController {
  constructor(private importTransactionsFile: ImportTransactionsFile) {}

  @Post('upload/transactions')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadTransactions(
    @UploadedFile() file: Express.Multer.File,
    @Body('provider') provider: string,
  ) {
    await this.importTransactionsFile.execute({ file: file.buffer, provider });
  }
}
