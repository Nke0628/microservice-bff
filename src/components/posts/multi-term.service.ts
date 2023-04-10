import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FetchAllRequest,
  FetchAllResponse,
  MultiEvaluationServiceClient,
} from 'src/proto/multi_evaluation';

@Injectable()
export class MultiTermService implements OnModuleInit {
  private sampleService: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService = this.client.getService<MultiEvaluationServiceClient>(
      'MultiEvaluationService',
    );
  }

  getSampleData(req: FetchAllRequest): Observable<FetchAllResponse> {
    return this.sampleService.fetchAll(req);
  }
}
