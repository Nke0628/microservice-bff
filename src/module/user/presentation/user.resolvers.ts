import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { FetchUsersByIdsArgs, User } from '../model/user.model';
import { Inject } from '@nestjs/common';
import { IUserRepository } from '../infrastructure/user.repository.interface';
import { DepartmentLoader } from 'src/module/department/infrastructure/department.loader';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly departmentLoader: DepartmentLoader,
  ) {}

  @Query(() => [User], {
    name: 'fetchUsersByIds',
  })
  async fetchUsersByIds(@Args() ids: FetchUsersByIdsArgs) {
    return await this.userRepository.fetchUsersByIds(ids.ids);
  }

  @ResolveField()
  async department(@Parent() user: User) {
    if (user.departmentId === '') {
      return null;
    }
    return this.departmentLoader.load(user.departmentId);
  }
}
