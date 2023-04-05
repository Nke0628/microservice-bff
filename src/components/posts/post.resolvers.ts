import { Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';

@Resolver((of) => {
  PostModel;
})
export class PostsResolver {
  constructor() {}
  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: 1,
        title: 'テスト',
      },
      {
        id: 2,
        title: 'テスト2',
      },
    ];
  }
}
