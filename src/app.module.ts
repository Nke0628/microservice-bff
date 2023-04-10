import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { graphql } from 'graphql';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './muti-evaluation/multi-business-term/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(
        process.cwd(),
        'src/generated/graphql/schema.gql',
      ),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    PostsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
