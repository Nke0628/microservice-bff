import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
  FindMyEvaluationByIdArgs,
  MultiEvaluationQuery,
} from '../model/multi-evaluation-query.model';
import { catchError, lastValueFrom, of } from 'rxjs';
import { MultiEvaluationQueryRepository } from '../infrastructure/multi-evaluation-query.repository';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { UserLoader } from 'src/module/user/infrastructure/user.loader';

@Resolver(() => MultiEvaluationQuery)
export class MultiEvaluationQueryResolver {
  constructor(
    private readonly multiEvaluationQueryRepository: MultiEvaluationQueryRepository,
    private readonly userLoader: UserLoader,
  ) {}
  /** IDによる360度評価取得 */
  @Query(() => MultiEvaluationQuery, {
    name: 'findMultiEvaluationById',
    nullable: true,
  })
  async findMyEvaluationById(@Args() arg: FindMyEvaluationByIdArgs) {
    const data = await lastValueFrom(
      this.multiEvaluationQueryRepository.fetchMultiEvaluationById(arg),
    );
    // NOT_FOUNDの場合はnullとして扱う
    if (data === null) {
      return null;
    }
    return new MultiEvaluationQuery({
      id: data.id,
      userId: data.userId,
      targetUserId: data.targetUserId,
      multiTermId: data.multiTermId,
      score: data.score,
      goodComment: data.goodComment,
      improvementComment: data.improvementComment,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }

  /** ユーザ(対象者）Model */
  @ResolveField()
  async targetUser(@Parent() multiEvaluationQuery: MultiEvaluationQuery) {
    console.log(multiEvaluationQuery);
    return this.userLoader.load(multiEvaluationQuery.targetUserId);
  }
}
