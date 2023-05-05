import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/grpc/grpc-client.service';
import {
  FetchUsersByIdsRequest,
  FetchUsersByIdsResponse,
  FindUserByIdRequest,
  FindUserByIdResponse,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class UserRepostitory {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  findUserById(req: FindUserByIdRequest): Observable<FindUserByIdResponse> {
    return this.myGrpcService.multiEvaluationService.findUserById(req);
  }

  fetchUsersByIds(
    req: FetchUsersByIdsRequest,
  ): Observable<FetchUsersByIdsResponse> {
    return this.myGrpcService.multiEvaluationService.fetchUsersByIds({
      userIds: req.userIds,
    });
  }
}
