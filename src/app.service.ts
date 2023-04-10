import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FetchAllRequest,
  FetchAllResponse,
  MultiEvaluationServiceClient,
} from './proto/multi_evaluation';

@Injectable()
export class AppService implements OnModuleInit {
  private sampleService: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService =
      this.client.getService<MultiEvaluationServiceClient>('EvaluationService');
  }

  getSampleData(): Observable<FetchAllResponse> {
    return this.sampleService.fetchAll({ take: 1, orderBy: true });
  }
}
