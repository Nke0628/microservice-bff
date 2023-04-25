import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MultiTermController } from './controller/multi-business-term.controller';
import { MultiTermService } from './infrastructure/multi-term.service';
import { PostsResolver } from './controller/multi-business-term.resolvers';
import { MultiEvaluationResolver } from './controller/multi-evaluation.resolvers';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVALUATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'multi_evaluation.v1',
          protoPath: join(
            __dirname,
            '../../proto/multi_evaluation/v1/multi_evaluation.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [MultiTermController],
  providers: [PostsResolver, MultiTermService, MultiEvaluationResolver],
})
export class PostsModule {}
