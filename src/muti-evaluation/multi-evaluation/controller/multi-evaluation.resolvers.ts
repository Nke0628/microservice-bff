import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { catchError, lastValueFrom } from 'rxjs';
import { UserRepostitory } from 'src/muti-evaluation/user/infrastructure/user.repository';
import { MultiEvaluationRepository } from '../infrastructure/multi-evaluation.repository';
import {
  MultiEvaluation,
  SubmitMultiEvaluationInput,
} from '../model/multi-evaluation.model';

@Resolver(() => MultiEvaluation)
export class MultiEvaluationResolver {
  constructor(
    private readonly multiEvaluationRepository: MultiEvaluationRepository,
    private readonly userRepository: UserRepostitory,
  ) {}

  @Query(() => [MultiEvaluation], {
    name: 'myEvaluatingMultiEvaluations',
  })
  async myEvaluatingMultiEvaluations(@Args('termId') termId: number) {
    // TODO 認証からuserIdを取得する
    const { data } = await lastValueFrom(
      this.multiEvaluationRepository
        .fetchByTermIdAndUserId({ termId: termId, userId: 1 })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    if (data === undefined) {
      return [];
    }
    return data;
  }

  @ResolveField()
  async targetUser(@Parent() multiEvaluation: MultiEvaluation) {
    const { data } = await lastValueFrom(
      this.userRepository
        .findUserById({
          userId: multiEvaluation.targetUserId,
        })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    return data;
  }

  @Mutation(() => MultiEvaluation)
  async submitMultiEvaluation(
    @Args('input')
    input: SubmitMultiEvaluationInput,
  ) {
    const { data } = await lastValueFrom(
      this.multiEvaluationRepository
        .submitMulitEvaluation({
          userId: input.userId,
          targetUserId: input.targetUserId,
          score: input.score,
          multiTermId: input.multiTermId,
          goodComment: input.goodComment,
          improvementComment: input.improvementComment,
        })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    return data;
  }
}
