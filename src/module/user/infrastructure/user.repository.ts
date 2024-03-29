import { Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, Observable } from 'rxjs';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import {
  FindUserByIdRequest,
  FindUserByIdResponse,
  User,
} from 'src/proto/genrated/multi_evaluation';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepostitory implements IUserRepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  findUserById(req: FindUserByIdRequest): Observable<FindUserByIdResponse> {
    return this.myGrpcService.multiEvaluationService.findUserById(req);
  }

  async fetchUsersByIds(userIds: number[]): Promise<User[]> {
    const { data } = await lastValueFrom(
      this.myGrpcService.multiEvaluationService
        .fetchUsersByIds({ userIds })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    return data;
  }
}
