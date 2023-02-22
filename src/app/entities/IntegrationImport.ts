import { Optional } from '../../helpers/Optional';

export interface IntegrationImportProps {
  provider: string;
  externalId: string;
  processedAt: Date;
}

export class IntegrationImport {
  private props: IntegrationImportProps;

  constructor(props: Optional<IntegrationImportProps, 'processedAt'>) {
    this.props = {
      ...props,
      processedAt: props.processedAt || new Date(),
    };
  }

  public get provider() {
    return this.props.provider;
  }

  public get externalId() {
    return this.props.externalId;
  }

  public get processedAt() {
    return this.props.processedAt;
  }
}
