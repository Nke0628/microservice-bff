import { Args, Query, Resolver } from '@nestjs/graphql';
import { FetchUsersByIdsArgs, User } from '../model/user.model';
import { UserRepostitory } from '../infrastructure/user.repository';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly userRepository: UserRepostitory) {}

  @Query(() => [User], {
    name: 'fetchUsersByIds',
  })
  async fetchUsersByIds(@Args() ids: FetchUsersByIdsArgs) {
    // TODO 認証からuserIdを取得する
    return await this.userRepository.fetchUsersByIds(ids.ids);
  }
}
