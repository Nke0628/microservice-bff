import { Injectable } from '@nestjs/common';
import { BaseBatchLoader } from 'src/util/dataloader';
import { Department } from '../model/department.model';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class DepartmentLoader extends BaseBatchLoader<string, Department> {
  constructor(private readonly departmentRepository: DepartmentRepository) {
    super();
  }
  protected async batchLoad(keys: string[]): Promise<(Error | Department)[]> {
    return await this.departmentRepository.fetchDepartmentByIds(keys);
  }
}
