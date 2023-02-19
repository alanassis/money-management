import { Category } from './Category';

describe('Transaction Category', () => {
  it('Should be able to create a transaction category', () => {
    const category = new Category('HOME');
    expect(category.value).toEqual('HOME');
  });

  it('Should not be able to create a transaction category', () => {
    expect(() => new Category('')).toThrow();
  });
});
