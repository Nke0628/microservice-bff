import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  EvaluationServiceClient,
  FetchAllRequest,
  FetchAllResponse,
} from 'src/proto/multiBusinessTerm';

@Injectable()
export class MultiTermService implements OnModuleInit {
  private sampleService: EvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService =
      this.client.getService<EvaluationServiceClient>('EvaluationService');
  }

  getSampleData(): Observable<FetchAllRequest> {
    return this.sampleService.fetchAll({} as FetchAllResponse);
  }
}
