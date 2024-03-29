import { Department } from '../model/department.model';

export interface IDepartmentRepository {
  fetchDepartmentByIds(departmentIds: string[]): Promise<Department[]>;
}
