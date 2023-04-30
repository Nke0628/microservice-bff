import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserRepostitory } from '../user/infrastructure/multi-evaluation.repository';
import { UserModule } from '../user/multi-evaluation.module';
import { MultiEvaluationResolver } from './controller/multi-evaluation.resolvers';
import { MultiEvaluationRepository } from './infrastructure/multi-evaluation.repository';

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
    UserModule,
  ],
  providers: [MultiEvaluationRepository, MultiEvaluationResolver],
})
export class MultiEvaluationModule {}
