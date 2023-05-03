import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';
import { UserRepostitory } from 'src/muti-evaluation/user/infrastructure/multi-evaluation.repository';
import { FetchByTermIdAndUserIdResponse } from 'src/proto/genrated/multi_evaluation';
import { MultiEvaluationRepository } from '../infrastructure/multi-evaluation.repository';
import {
  MultiEvaluation,
  RegisterMultiEvaluationInput,
} from '../model/multi-evaluation.model';

@Resolver((of) => MultiEvaluation)
export class MultiEvaluationResolver {
  constructor(
    private readonly multi: MultiEvaluationRepository,
    private readonly userRepository: UserRepostitory,
  ) {}

  @Query(() => [MultiEvaluation], {
    name: 'multiEvaluations',
  })
  async getMultiEvaluation(@Args('termId') termId: number) {
    const res: FetchByTermIdAndUserIdResponse = await lastValueFrom(
      this.multi.getTest({ termid: termId, userId: 1 }),
    );
    if (res.data === undefined) {
      return [];
    }
    return res.data;
  }

  @ResolveField()
  async targetUser(@Parent() test: MultiEvaluation) {
    const rest = await lastValueFrom(
      this.userRepository.findUserById({
        userId: test.userId,
      }),
    );
    return rest.data;
  }

  @Mutation(() => MultiEvaluation)
  async registerMultiEvaluation(
    @Args('input')
    req: RegisterMultiEvaluationInput,
  ) {
    const rest = await lastValueFrom(
      this.multi.registerMulitEvaluation({
        userId: req.userId,
        targetUserId: req.targetUserId,
        score: req.score,
        multiTermId: req.multiTermId,
        goodComment: req.goodComment,
        improvementComment: req.improvementComment,
      }),
    );
    return rest.data;
  }
}
