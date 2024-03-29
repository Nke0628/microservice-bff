import { Injectable } from '@nestjs/common';
import { BaseBatchLoader } from 'src/util/dataloader';
import { User } from '../model/user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserLoader extends BaseBatchLoader<number, User> {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }
  protected async batchLoad(keys: number[]): Promise<(Error | User)[]> {
    return await this.userRepository.fetchUsersByIds(keys);
  }
}
