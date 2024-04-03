import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { IUserRepository } from './user.repository.interface';
import { UserBase, UserType } from '../model/user.model';

@Injectable()
export class UserRepositoryMock implements IUserRepository {
  fetchUsersByIds = async (userIds: number[]): Promise<UserBase[]> => {
    return new Promise((resolve) => {
      const mockData: UserBase[] = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: faker.internet.userName(),
        departmentId: 'S' + (i + 1),
        userType: UserType.EMPLOYEE,
      }));
      mockData.push({
        id: 101,
        name: faker.internet.userName(),
        departmentId: '',
        userType: UserType.EMPLOYEE,
      });
      const filteredMockData = mockData.filter((user) =>
        userIds.includes(user.id),
      );
      resolve(filteredMockData);
    });
  };
}
