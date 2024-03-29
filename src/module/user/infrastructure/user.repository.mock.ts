import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from 'src/proto/genrated/multi_evaluation';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepositoryMock implements IUserRepository {
  fetchUsersByIds = async (userIds: number[]): Promise<User[]> => {
    return new Promise((resolve) => {
      const mockData: User[] = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: faker.internet.userName(),
      }));
      const filteredMockData = mockData.filter((user) =>
        userIds.includes(user.id),
      );
      resolve(filteredMockData);
    });
  };
}
