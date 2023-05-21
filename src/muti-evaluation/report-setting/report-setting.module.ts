import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/grpc/grpc-client.module';
import { UserModule } from '../user/user.module';
import { ReportoSettingResolver } from './controller/report-setting.resolver';
import { ReportSettingepository } from './infrastructure/report-setting.repository';

@Module({
  imports: [MyGrpcModule, UserModule],
  providers: [ReportSettingepository, ReportoSettingResolver],
})
export class ReportSettingModule {}
