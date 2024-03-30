import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import {
  FindUserByIdRequest,
  FindUserByIdResponse,
} from 'src/proto/genrated/multi_evaluation';
import { IUserRepository } from './user.repository.interface';
import { UserBase } from '../model/user.model';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  findUserById(req: FindUserByIdRequest): Observable<FindUserByIdResponse> {
    return this.myGrpcService.multiEvaluationService.findUserById(req);
  }

  fetchUsersByIds(userIds: number[]): Promise<UserBase[]> {
    throw new Error('Method not implemented.');
  }

  // TODO User情報を取得する
  // async fetchUsersByIds(userIds: number[]): Promise<User[]> {
  //   const { data } = await lastValueFrom(
  //     this.myGrpcService.multiEvaluationService
  //       .fetchUsersByIds({ userIds })
  //       .pipe(
  //         catchError((e) => {
  //           throw e;
  //         }),
  //       ),
  //   );
  //   return data;
  // }
}
