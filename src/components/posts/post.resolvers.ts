import { Args, Query, Resolver } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';
import { FetchAllResponse } from 'src/proto/multi_evaluation';
import { MulritTerms } from './interfaces/MulritTerms.model';
import { MultiTermService } from './multi-term.service';

@Resolver((of) => {
  MulritTerms;
})
export class PostsResolver {
  constructor(private readonly multi: MultiTermService) {}
  @Query(() => [MulritTerms], { name: 'multi_terms', nullable: true })
  async getMultiTerms(
    @Args('take') take: number,
    @Args('orederBy') orderBy: boolean,
  ) {
    // return [
    //   {
    //     id: 1,
    //     title: 'テスト',
    //   },
    //   {
    //     id: 2,
    //     title: 'テスト2',
    //   },
    // ];
    const res: FetchAllResponse = await lastValueFrom(
      this.multi.getSampleData({ take: take, orderBy: orderBy }),
    );
    return res.multiBusinessTermList;
  }

  @Query(() => [MulritTerms], { name: 'multi_terms_test', nullable: true })
  async getMultiTerms_test(
    @Args('take') take: number,
    @Args('orederBy') orderBy: boolean,
  ) {
    // return [
    //   {
    //     id: 1,
    //     title: 'テスト',
    //   },
    //   {
    //     id: 2,
    //     title: 'テスト2',
    //   },
    // ];
    const res: FetchAllResponse = await lastValueFrom(
      this.multi.getSampleData({ take: take, orderBy: orderBy }),
    );
    return res.multiBusinessTermList;
  }
}
