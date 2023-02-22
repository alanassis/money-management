import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IntegrationsImportsRepository } from '@app/repositories/integrations-imports-repository';
import { IntegrationImport } from '@app/entities/IntegrationImport';
import { PrismaIntegrationsImportsMapper } from '../mappers/prisma-integrations-imports-mapper';

@Injectable()
export class PrismaIntegrationsImportsRepository
  implements IntegrationsImportsRepository
{
  constructor(private prisma: PrismaService) {}

  async createMany(imports: IntegrationImport[]): Promise<void> {
    const rawImports = imports.map(PrismaIntegrationsImportsMapper.toPrisma);
    await this.prisma.integrationImport.createMany({ data: rawImports });
  }

  async getProcessedExternalIds(externalIds: string[]): Promise<string[]> {
    const rawImports = await this.prisma.integrationImport.findMany({
      where: {
        externalId: {
          in: externalIds,
        },
      },
      select: {
        externalId: true,
      },
    });

    return rawImports.map((rawImport) => rawImport.externalId);
  }
}
