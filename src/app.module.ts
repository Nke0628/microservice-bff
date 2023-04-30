import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { AuthGuard } from './auth/auth.guard';
import { MultiBusinessTermModule } from './muti-evaluation/multi-business-term/multi-business-term.module';
import { MultiEvaluationModule } from './muti-evaluation/multi-evaluation/multi-evaluation.module';
import { UserModule } from './muti-evaluation/user/multi-evaluation.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join('src/generated/graphql/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    UserModule,
    MultiBusinessTermModule,
    MultiEvaluationModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
