import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { IDepartmentRepository } from './department.repository.interface';
import { Department } from '../model/department.model';

@Injectable()
export class DepartmentRepositoryMock implements IDepartmentRepository {
  fetchDepartmentByIds(departmentIds: string[]): Promise<Department[]> {
    return new Promise((resolve) => {
      const mockData: Department[] = Array.from({ length: 100 }, (_, i) => ({
        id: 'S' + (i + 1),
        name: faker.company.name(),
      }));
      const filteredMockData = mockData.filter((user) =>
        departmentIds.includes(user.id),
      );
      resolve(filteredMockData);
    });
  }
}
