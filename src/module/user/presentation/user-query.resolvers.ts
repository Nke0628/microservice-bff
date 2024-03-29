import { Args, Query, Resolver } from '@nestjs/graphql';
import { FetchUsersByIdsArgs, User } from '../model/user.model';
import { Inject } from '@nestjs/common';
import { IUserRepository } from '../infrastructure/user.repository.interface';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  @Query(() => [User], {
    name: 'fetchUsersByIds',
  })
  async fetchUsersByIds(@Args() ids: FetchUsersByIdsArgs) {
    // TODO 認証からuserIdを取得する
    return await this.userRepository.fetchUsersByIds(ids.ids);
  }
}
