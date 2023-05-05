import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { AuthGuard } from './auth/auth.guard';
import { MultiTermModule } from './muti-evaluation/multi-business-term/multi-term.module';
import { MultiEvaluationModule } from './muti-evaluation/multi-evaluation/multi-evaluation.module';
import { UserModule } from './muti-evaluation/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join('src/generated/graphql/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    UserModule,
    MultiTermModule,
    MultiEvaluationModule,
  ],

  // TODO 認証認可実装する
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
