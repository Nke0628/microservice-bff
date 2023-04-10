import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MultiTermController } from './multi-term.controller';
import { MultiTermService } from './multi-term.service';
import { PostsResolver } from './post.resolvers';

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
  providers: [PostsResolver, MultiTermService],
})
export class PostsModule {}
