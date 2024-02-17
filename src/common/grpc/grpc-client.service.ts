import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { MultiEvaluationServiceClient } from 'src/proto/genrated/multi_evaluation';

// gRPCクライアントを保持するラッパーサービス
@Injectable()
export class MyGrpcService implements OnModuleInit {
  public multiEvaluationService: MultiEvaluationServiceClient;

  constructor(@Inject('EVALUATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.multiEvaluationService =
      this.client.getService<MultiEvaluationServiceClient>(
        'MultiEvaluationService',
      );
  }
}
