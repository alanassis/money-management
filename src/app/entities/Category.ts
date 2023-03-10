export enum CategoryType {
  None = 'NONE',
  Food = 'FOOD',
  Family = 'FAMILY',
  Education = 'EDUCATION',
  Leisure = 'LEISURE',
  Travel = 'TRAVEL',
  Housing = 'HOUSING',
  Clothing = 'CLOTHING',
  Transport = 'TRANSPORT',
  Health = 'HEALTH',
}

export class Category {
  private readonly content: CategoryType;

  public get value(): CategoryType {
    return this.content;
  }

  constructor(content?: CategoryType | string) {
    if (content && !this.isAllowedValue(content)) {
      throw new Error('Invalid Category value.');
    }

    this.content = (content as CategoryType) || CategoryType.None;
  }

  private isAllowedValue(content: string): boolean {
    return Object.values(CategoryType).includes(
      content as unknown as CategoryType,
    );
  }
}
