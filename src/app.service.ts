import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  EvaluationServiceClient,
  FetchMultiTermsRequest,
  FetchMultiTermsResponese,
} from './proto/sample';

@Injectable()
export class AppService implements OnModuleInit {
  private sampleService: EvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService =
      this.client.getService<EvaluationServiceClient>('EvaluationService');
  }

  getSampleData(): Observable<FetchMultiTermsResponese> {
    return this.sampleService.fetchMultiTerms({} as FetchMultiTermsRequest);
  }
}
