import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import {
  FetchReportSettingsByTermIdResponse,
  RegisterReportSettingsResponse,
} from 'src/proto/genrated/multi_evaluation';
import { SaveReportSettingInput } from '../model/report-setting.model';

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

  SaveReportSetting(
    userId: number,
    input: SaveReportSettingInput,
  ): Observable<RegisterReportSettingsResponse> {
    return this.myGrpcService.multiEvaluationService.registerReportSettings({
      userId,
      termId: input.termId,
      reportSettingDetails: input.reportSettingDetail,
    });
  }
}
