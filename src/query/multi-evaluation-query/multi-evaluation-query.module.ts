import { Module } from '@nestjs/common';
import { MultiEvaluationQueryResolver } from './presentation/multi-evaluation-query.resolver';

@Module({
  imports: [],
  providers: [MultiEvaluationQueryResolver],
})
export class MultiEvaluationQueryModule {}
