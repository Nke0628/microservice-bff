import { Inject, Injectable } from '@nestjs/common';
import { BaseBatchLoader } from 'src/util/dataloader';
import { Department } from '../model/department.model';
import { IDepartmentRepository } from './department.repository.interface';

@Injectable()
export class DepartmentLoader extends BaseBatchLoader<string, Department> {
  constructor(
    @Inject('DepartmentRepository')
    private readonly departmentRepository: IDepartmentRepository,
  ) {
    super();
  }
  protected async batchLoad(keys: string[]): Promise<(Error | Department)[]> {
    return await this.departmentRepository.fetchDepartmentByIds(keys);
  }
}
