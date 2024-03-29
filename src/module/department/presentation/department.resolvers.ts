import { Args, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import {
  Department,
  FetchDepartmentByIdsArgs,
} from '../model/department.model';
import { IDepartmentRepository } from '../infrastructure/department.repository.interface';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(
    @Inject('DepartmentRepository')
    private readonly departmentRepository: IDepartmentRepository,
  ) {}

  @Query(() => [Department], {
    name: 'fetchDepartmentByIds',
  })
  async fetchDepartmentByIds(@Args() ids: FetchDepartmentByIdsArgs) {
    // TODO 認証からuserIdを取得する
    return await this.departmentRepository.fetchDepartmentByIds(ids.ids);
  }
}
