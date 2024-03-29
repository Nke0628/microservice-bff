import { Module } from '@nestjs/common';
import { MultiEvaluationQueryResolver } from './presentation/multi-evaluation-query.resolver';
import { MultiEvaluationQueryRepository } from './infrastructure/multi-evaluation-query.repository';
import { MyGrpcModule } from 'src/common/grpc/grpc-client.module';
import { UserModule } from 'src/module/user/user.module';

@Module({
  imports: [MyGrpcModule, UserModule],
  providers: [MultiEvaluationQueryResolver, MultiEvaluationQueryRepository],
})
export class MultiEvaluationQueryModule {}
