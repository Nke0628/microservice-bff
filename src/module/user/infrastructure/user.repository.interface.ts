import { UserBase } from '../model/user.model';

export interface IUserRepository {
  fetchUsersByIds(userIds: number[]): Promise<UserBase[]>;
}
