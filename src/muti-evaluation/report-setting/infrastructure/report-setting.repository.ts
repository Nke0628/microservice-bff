import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/grpc/grpc-client.service';
import { FetchReportSettingsByTermIdResponse } from 'src/proto/genrated/multi_evaluation';

@Injectable()
export class ReportSettingepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}

  FetchReportSettingByTermId(
    termId: number,
  ): Observable<FetchReportSettingsByTermIdResponse> {
    return this.myGrpcService.multiEvaluationService.fetchReportSettingsByTermId(
      { termId },
    );
  }
}
