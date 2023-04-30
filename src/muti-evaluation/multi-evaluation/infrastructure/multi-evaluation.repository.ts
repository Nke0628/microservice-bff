import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FetchByTermIdAndUserIdRequst,
  FetchByTermIdAndUserIdResponse,
  MultiEvaluationServiceClient,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class MultiEvaluationRepository implements OnModuleInit {
  private sampleService: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService = this.client.getService<MultiEvaluationServiceClient>(
      'MultiEvaluationService',
    );
  }

  getTest(
    req: FetchByTermIdAndUserIdRequst,
  ): Observable<FetchByTermIdAndUserIdResponse> {
    return this.sampleService.fetchByTermIdAndUserId(req);
  }
}
