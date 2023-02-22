import { IntegrationImport } from '../entities/IntegrationImport';

export abstract class IntegrationsImportsRepository {
  abstract createMany(imports: IntegrationImport[]): Promise<void>;
  abstract getProcessedExternalIds(externalIds: string[]): Promise<string[]>;
}
