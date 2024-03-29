import { Injectable } from '@nestjs/common';
import { BaseBatchLoader } from 'src/util/dataloader';
import { User } from '../model/user.model';
import { UserRepostitory } from './user.repository';

@Injectable()
export class UserLoader extends BaseBatchLoader<number, User> {
  constructor(private readonly userRepository: UserRepostitory) {
    super();
  }
  protected async batchLoad(keys: number[]): Promise<(Error | User)[]> {
    return await this.userRepository.fetchUsersByIds(keys);
  }
}
