import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FetchByTermIdAndUserIdRequst,
  FetchByTermIdAndUserIdResponse,
  MultiEvaluationServiceClient,
  SubmitMultiEvaluationRequest,
  SubmitMultiEvaluationResponse,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class MultiEvaluationRepository implements OnModuleInit {
  private multiEvaluationRepository: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.multiEvaluationRepository =
      this.client.getService<MultiEvaluationServiceClient>(
        'MultiEvaluationService',
      );
  }

  getTest(
    req: FetchByTermIdAndUserIdRequst,
  ): Observable<FetchByTermIdAndUserIdResponse> {
    return this.multiEvaluationRepository.fetchByTermIdAndUserId(req);
  }

  registerMulitEvaluation(
    req: SubmitMultiEvaluationRequest,
  ): Observable<SubmitMultiEvaluationResponse> {
    const test = this.multiEvaluationRepository.submitMultiEvaluation(req);
    return test;
  }
}
