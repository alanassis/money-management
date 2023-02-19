import { Category } from './Category';
import { Transaction } from './Transaction';

describe('Transaction', () => {
  const defaultProps = {
    name: 'Supermercado',
    category: new Category('FOOD'),
    amount: 100,
    performedAt: new Date(),
  };

  it('Should be able to create a transaction', () => {
    const transaction = new Transaction(defaultProps);

    expect(transaction.id).toBeTruthy();
    expect(transaction.createdAt).toBeInstanceOf(Date);
  });

  it('Should be able to update a transaction', () => {
    const transaction = new Transaction(defaultProps);

    transaction.name = 'Farmacia';
    transaction.category = new Category('COSMETIC');
    transaction.amount = 50;
    transaction.performedAt = new Date();

    expect(transaction.name).not.toEqual(defaultProps.name);
    expect(transaction.category).not.toEqual(defaultProps.category);
    expect(transaction.amount).not.toEqual(defaultProps.amount);
    expect(transaction.performedAt).not.toEqual(defaultProps.performedAt);
  });
});
