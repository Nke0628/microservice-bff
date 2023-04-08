import { Query, Resolver } from '@nestjs/graphql';
import { MulritTerms } from './interfaces/MulritTerms.model';
import { MultiTermService } from './multi-term.service';

@Resolver((of) => {
  MulritTerms;
})
export class PostsResolver {
  constructor(private readonly multi: MultiTermService) {}
  @Query(() => MulritTerms, { name: 'multi_terms', nullable: true })
  async getMultiTerms() {
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
    return this.multi.getSampleData();
  }
}
