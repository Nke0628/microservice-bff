import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/grpc/grpc-client.service';
import {
  FetchByTermIdAndUserIdRequst,
  FetchByTermIdAndUserIdResponse,
  SubmitMultiEvaluationRequest,
  SubmitMultiEvaluationResponse,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class MultiEvaluationRepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  fetchByTermIdAndUserId(
    request: FetchByTermIdAndUserIdRequst,
  ): Observable<FetchByTermIdAndUserIdResponse> {
    return this.myGrpcService.multiEvaluationService.fetchByTermIdAndUserId(
      request,
    );
  }

  submitMulitEvaluation(
    request: SubmitMultiEvaluationRequest,
  ): Observable<SubmitMultiEvaluationResponse> {
    return this.myGrpcService.multiEvaluationService.submitMultiEvaluation(
      request,
    );
  }
}
