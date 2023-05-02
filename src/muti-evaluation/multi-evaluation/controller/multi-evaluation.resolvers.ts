import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { last, lastValueFrom } from 'rxjs';
import { UserRepostitory } from 'src/muti-evaluation/user/infrastructure/multi-evaluation.repository';
import { FetchByTermIdAndUserIdResponse } from 'src/proto/genrated/multi_evaluation';
import { MultiEvaluationRepository } from '../infrastructure/multi-evaluation.repository';
import { MultiEvaluation, User } from '../model/multi-evaluation.model';

@Resolver((of) => MultiEvaluation)
export class MultiEvaluationResolver {
  constructor(
    private readonly multi: MultiEvaluationRepository,
    private readonly userRepository: UserRepostitory,
  ) {}

  @Query(() => [MultiEvaluation], {
    name: 'multiEvaluation',
  })
  async getMultiEvaluation() {
    const res: FetchByTermIdAndUserIdResponse = await lastValueFrom(
      this.multi.getTest({ termid: 1, userId: 1 }),
    );
    return res.data;
  }

  @ResolveField()
  async user(@Parent() test: MultiEvaluation) {
    const rest = await lastValueFrom(
      this.userRepository.findUserById({
        userId: test.userId,
      }),
    );
    return rest.data;
  }
}
