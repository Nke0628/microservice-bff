import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppServiceClient, SamepleData, SampleDataById } from './proto/sample';

@Injectable()
export class AppService implements OnModuleInit {
  private sampleService: AppServiceClient;

  constructor(@Inject('SAMPLE_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.sampleService = this.client.getService<AppServiceClient>('AppService');
  }

  getSampleData(): Observable<SamepleData> {
    return this.sampleService.findOne({ id: 1 } as SampleDataById);
  }
}
