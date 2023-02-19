import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/database.module';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TransactionsResolver } from './resolvers/transactions.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { CreateTransaction } from '@app/use-cases/create-transaction';
import { ListTransactions } from '@app/use-cases/list-transactions';
import { UpdateTransaction } from '@app/use-cases/update-transaction';
import { DeleteTransaction } from '@app/use-cases/delete-transaction';

@Module({
  imports: [
    DatabaseModule,
    GraphQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers: [
    ListTransactions,
    CreateTransaction,
    UpdateTransaction,
    DeleteTransaction,
    TransactionsResolver,
  ],
})
export class GraphQLModule {}
