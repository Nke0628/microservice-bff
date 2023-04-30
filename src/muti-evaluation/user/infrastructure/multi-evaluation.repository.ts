import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FetchByTermIdAndUserIdRequst,
  FetchByTermIdAndUserIdResponse,
  FetchUsersByIdsRequest,
  FetchUsersByIdsResponse,
  FindUserByIdRequest,
  FindUserByIdResponse,
  MultiEvaluationServiceClient,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class UserRepostitory implements OnModuleInit {
  private multiEvaluationService: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.multiEvaluationService =
      this.client.getService<MultiEvaluationServiceClient>(
        'MultiEvaluationService',
      );
  }

  findUserById(req: FindUserByIdRequest): Observable<FindUserByIdResponse> {
    return this.multiEvaluationService.findUserById(req);
  }

  fetchUsersByIds(
    req: FetchUsersByIdsRequest,
  ): Observable<FetchUsersByIdsResponse> {
    return this.multiEvaluationService.fetchUsersByIds({
      userIds: req.userIds,
    });
  }
}
