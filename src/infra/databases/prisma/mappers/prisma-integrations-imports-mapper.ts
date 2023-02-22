import { IntegrationImport } from '@app/entities/IntegrationImport';
import { IntegrationImport as RawIntegrationImport } from 'prisma/prisma-client';

export class PrismaIntegrationsImportsMapper {
  public static toPrisma(
    integrationImport: IntegrationImport,
  ): RawIntegrationImport {
    return {
      externalId: integrationImport.externalId,
      provider: integrationImport.provider,
      processedAt: integrationImport.processedAt,
    };
  }

  public static toDomain(raw: RawIntegrationImport): IntegrationImport {
    return new IntegrationImport({
      externalId: raw.externalId,
      provider: raw.provider,
      processedAt: raw.processedAt,
    });
  }
}
