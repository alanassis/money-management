type CategoryContent =
  | 'HOME'
  | 'CONTACTS'
  | 'ENTERTAINMENT'
  | 'GENERAL'
  | 'FOOD'
  | 'INVESTMENT'
  | 'TRANSPORT'
  | 'COSMETIC';

export class Category {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  constructor(content: CategoryContent | string) {
    if (!this.isAllowedValue(content)) {
      throw new Error('Invalid Category value.');
    }

    this.content = content;
  }

  private isAllowedValue(content: string): boolean {
    const ALLOWED_VALUES = [
      'HOME',
      'CONTACTS',
      'ENTERTAINMENT',
      'GENERAL',
      'FOOD',
      'INVESTMENT',
      'COSMETIC',
    ];

    return ALLOWED_VALUES.includes(content);
  }
}
