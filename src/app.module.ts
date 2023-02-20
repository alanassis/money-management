import { Module } from '@nestjs/common';
import { GraphQLModule } from './infra/graphql/graphql.module';
import { HTTPModule } from './infra/http/http.module';

@Module({
  imports: [GraphQLModule, HTTPModule],
})
export class AppModule {}
