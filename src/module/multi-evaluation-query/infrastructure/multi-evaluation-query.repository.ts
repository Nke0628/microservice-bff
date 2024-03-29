import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import {
  FindMultiEvaluationByIdRequest,
  FindMultiEvaluationByIdResponse,
} from 'src/proto/genrated/multi_evaluation_query';

@Injectable()
export class MultiEvaluationQueryRepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  /** IDによる360度評価取得 */
  fetchMultiEvaluationById(
    request: FindMultiEvaluationByIdRequest,
  ): Observable<FindMultiEvaluationByIdResponse> {
    return this.myGrpcService.multiEvaluationQueryService.findMultiEvaluationById(
      request,
    );
  }
}
