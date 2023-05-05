import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/grpc/grpc-client.module';
import { UserModule } from '../user/user.module';
import { MultiEvaluationResolver } from './controller/multi-evaluation.resolvers';
import { MultiEvaluationRepository } from './infrastructure/multi-evaluation.repository';

@Module({
  imports: [MyGrpcModule, UserModule],
  providers: [MultiEvaluationRepository, MultiEvaluationResolver],
})
export class MultiEvaluationModule {}
