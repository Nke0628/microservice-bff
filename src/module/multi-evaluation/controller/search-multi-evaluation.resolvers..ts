import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { catchError, lastValueFrom } from 'rxjs';
import { UserRepostitory } from 'src/module/user/infrastructure/user.repository';
import { MultiEvaluationRepository } from '../infrastructure/multi-evaluation.repository';
import {
  MultiEvaluation,
  SearchMyEvaluatingMultiEvaluationsArgs,
  SubmitMultiEvaluationInput,
} from '../model/multi-evaluation.model';
import { SearchMultiEvaluation } from '../model/search-multi-evaluation.model';

@Resolver(() => SearchMultiEvaluation)
export class SearcgMultiEvaluationResolver {
  constructor(
    private readonly multiEvaluationRepository: MultiEvaluationRepository,
    private readonly userRepository: UserRepostitory,
  ) {}

  @Query(() => SearchMultiEvaluation, {
    name: 'searchMyEvaluatingMultiEvaluations',
  })
  async searchMyEvaluatingMultiEvaluations(
    @Args() arg: SearchMyEvaluatingMultiEvaluationsArgs,
  ) {
    // TODO 認証からuserIdを取得する
    const { data } = await lastValueFrom(
      this.multiEvaluationRepository
        .fetchByTermIdAndUserId({ termId: 1, userId: 1 })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    if (data === undefined) {
      return [];
    }
    return {
      multiEvaluation: data,
      totalCount: 10,
    };
  }
}
