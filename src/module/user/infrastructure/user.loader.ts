import { Inject, Injectable } from '@nestjs/common';
import { BaseBatchLoader } from 'src/util/dataloader';
import { User } from 'src/proto/genrated/multi_evaluation';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserLoader extends BaseBatchLoader<number, User> {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {
    super();
  }
  protected async batchLoad(keys: number[]): Promise<(Error | User)[]> {
    return await this.userRepository.fetchUsersByIds(keys);
  }
}
