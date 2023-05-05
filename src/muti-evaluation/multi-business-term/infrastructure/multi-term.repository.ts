import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/grpc/grpc-client.service';
import {
  FetchMultiTermAllRequest,
  FetchMultiTermAllResponse,
} from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class MultiTermRepositoy {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  fetchMultiTermAll(
    request: FetchMultiTermAllRequest,
  ): Observable<FetchMultiTermAllResponse> {
    return this.myGrpcService.multiEvaluationService.fetchMultiTermAll(request);
  }
}
