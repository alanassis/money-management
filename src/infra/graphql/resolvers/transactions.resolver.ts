import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTransaction } from '@app/use-cases/create-transaction';
import { CreateTransactionInput } from '../types/create-transaction-dto';
import { TransactionSchema } from '../schemas/transaction-schema';
import { GraphQLTransactionMapper } from '../mappers/graphql-transaction-mapper';
import { ListTransactions } from '@app/use-cases/list-transactions';
import { UpdateTransactionInput } from '../types/update-transaction-dto';
import { UpdateTransaction } from '@app/use-cases/update-transaction';
import { DeleteTransaction } from '@app/use-cases/delete-transaction';

@Resolver()
export class TransactionsResolver {
  constructor(
    private listTransactionsUseCase: ListTransactions,
    private createTransactionUseCase: CreateTransaction,
    private updateTransactionUseCase: UpdateTransaction,
    private deleteTransactionUseCase: DeleteTransaction,
  ) {}

  @Query(() => [TransactionSchema], { name: 'transactions' })
  async listTransactions(): Promise<TransactionSchema[]> {
    const { transactions } = await this.listTransactionsUseCase.execute();

    const gqlTransactions = transactions.map(
      GraphQLTransactionMapper.toGraphQL,
    );
    return gqlTransactions;
  }

  @Mutation(() => TransactionSchema)
  async createTransaction(
    @Args('createTransactionData')
    createTransactionData: CreateTransactionInput,
  ): Promise<TransactionSchema> {
    const { transaction } = await this.createTransactionUseCase.execute(
      createTransactionData,
    );

    const gqlTransaction = GraphQLTransactionMapper.toGraphQL(transaction);
    return gqlTransaction;
  }

  @Mutation(() => TransactionSchema)
  async updateTransaction(
    @Args('updateTransactionData')
    updateTransactionData: UpdateTransactionInput,
  ): Promise<TransactionSchema> {
    const { id, ...data } = updateTransactionData;
    const { transaction } = await this.updateTransactionUseCase.execute({
      id,
      data,
    });

    const gqlTransaction = GraphQLTransactionMapper.toGraphQL(transaction);
    return gqlTransaction;
  }

  @Mutation(() => Boolean)
  async deleteTransaction(@Args('id') id: string): Promise<boolean> {
    await this.deleteTransactionUseCase.execute({ id });
    return true;
  }
}
