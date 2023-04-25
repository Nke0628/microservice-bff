import { Query, Resolver } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';
import { FetchByTermIdAndUserIdResponse } from 'src/proto/genrated/multi_evaluation';
import { MultiTermService } from '../infrastructure/multi-term.service';
import { MultiEvaluation } from '../model/multi-evaluation.model';

@Resolver((of) => {
  MultiEvaluation;
})
export class MultiEvaluationResolver {
  constructor(private readonly multi: MultiTermService) {}
  @Query(() => [MultiEvaluation], {
    name: 'multiEvaluation',
    nullable: true,
  })
  async getMultiEvaluation() {
    const res: FetchByTermIdAndUserIdResponse = await lastValueFrom(
      this.multi.getTest({ termid: 1, userId: 1 }),
    );
    return res.data;
  }
}
