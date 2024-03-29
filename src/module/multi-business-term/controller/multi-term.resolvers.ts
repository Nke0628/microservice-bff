import { Args, Query, Resolver } from '@nestjs/graphql';
import { catchError, lastValueFrom } from 'rxjs';
import { MulritTerm } from '../model/multi-term.model';
import { MultiTermRepositoy } from '../infrastructure/multi-term.repository';

@Resolver(() => {
  MulritTerm;
})
export class MultiTermResolver {
  constructor(private readonly multiTermRepository: MultiTermRepositoy) {}

  @Query(() => [MulritTerm], { name: 'multiTerms' })
  async getMultiTerms(
    @Args('take') take: number,
    @Args('orederBy') orderBy: boolean,
  ) {
    const { data } = await lastValueFrom(
      this.multiTermRepository
        .fetchMultiTermAll({
          take: take,
          orderBy: orderBy,
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
