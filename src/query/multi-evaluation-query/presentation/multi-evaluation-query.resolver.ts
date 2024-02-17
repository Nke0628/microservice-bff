import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  FindMyEvaluationByIdArgs,
  MultiEvaluationQuery,
} from '../model/multi-evaluation-query.model';

@Resolver(() => MultiEvaluationQuery)
export class MultiEvaluationQueryResolver {
  /** IDによる360度評価取得 */
  @Query(() => MultiEvaluationQuery, {
    name: 'findMultiEvaluationById',
    nullable: true,
  })
  async findMyEvaluationById(@Args() arg: FindMyEvaluationByIdArgs) {
    return {
      id: 1,
      userId: 1,
      targetUserId: 1,
      multiTermId: 1,
      score: 30,
      goodComment: '',
      improvementCOmment: '',
      createdAt: '',
      updatedAt: '',
    };
  }
}
