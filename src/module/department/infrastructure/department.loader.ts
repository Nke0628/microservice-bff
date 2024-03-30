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
    const departments = await this.departmentRepository.fetchDepartmentByIds(
      keys,
    );
    // @see dataloaderの制約上キー順に取得した値を並び替える
    // https://hireroo.io/journal/tech/dataloader-constraints
    return keys.map((key) =>
      departments.find((department) => {
        return department.id == key;
      }),
    );
  }
}
