import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { AuthGuard } from './auth/auth.guard';
import { MultiTermModule } from './module/multi-business-term/multi-term.module';
import { MultiEvaluationModule } from './module/multi-evaluation/multi-evaluation.module';
import { ReportSettingModule } from './module/report-setting/report-setting.module';
import { UserModule } from './module/user/user.module';
import { MultiEvaluationQueryModule } from './module/multi-evaluation-query/multi-evaluation-query.module';
import { DepartmentModule } from './module/department/department.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join('src/generated/graphql/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    DepartmentModule,
    MultiTermModule,
    MultiEvaluationModule,
    ReportSettingModule,
    MultiEvaluationQueryModule,
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
