import { User } from 'src/proto/genrated/multi_evaluation';

export interface IUserRepository {
  fetchUsersByIds(userIds: number[]): Promise<User[]>;
}
