import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { catchError, lastValueFrom } from 'rxjs';
import { UserRepostitory } from 'src/muti-evaluation/user/infrastructure/user.repository';
import { ReportSettingepository } from '../infrastructure/report-setting.repository';
import { ReportoSetting } from '../model/report-setting.model';

@Resolver(() => ReportoSetting)
export class ReportoSettingResolver {
  constructor(
    private readonly ReportSettingRepository: ReportSettingepository,
    private readonly userRepository: UserRepostitory,
  ) {}

  @Query(() => ReportoSetting, {
    name: 'reportSetting',
  })
  async reportSetting(@Args('termId') termId: number) {
    console.log('hoge');
    const { data } = await lastValueFrom(
      this.ReportSettingRepository.FetchReportSettingByTermId(termId).pipe(
        catchError((e) => {
          throw e;
        }),
      ),
    );
    if (data === undefined) {
      return [];
    }
    return data;
  }

  @ResolveField()
  async saveUser(@Parent() reportoSetting: ReportoSetting) {
    const { data } = await lastValueFrom(
      this.userRepository
        .findUserById({
          userId: reportoSetting.saveUserId,
        })
        .pipe(
          catchError((e) => {
            throw e;
          }),
        ),
    );
    return data;
  }
}
