import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';
import { FetchAllResponse } from 'src/proto/genrated/multi_evaluation';
import { MulritTerms } from '../model/MulritTerms.model';
import { MultiTermService } from '../infrastructure/multi-term.service';

@Resolver((of) => {
  MulritTerms;
})
export class MultiBusinessTermResolver {
  constructor(private readonly multi: MultiTermService) {}
  @Query(() => [MulritTerms], { name: 'multiBusinessTerms' })
  async getMultiTerms(
    @Args('take') take: number,
    @Args('orederBy') orderBy: boolean,
  ) {
    const res: FetchAllResponse = await lastValueFrom(
      this.multi.getSampleData({ take: take, orderBy: orderBy }),
    );
    return res.data;
  }
}