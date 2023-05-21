import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/muti-evaluation/user/model/user.model';
import { ReportSettingDetail } from 'src/proto/genrated/multi_evaluation';

@ObjectType('ReportSetting')
export class ReportoSetting {
  @Field((type) => ID)
  reportSettingId: number;

  @Field((type) => Number)
  saveUserId: number;

  @Field((type) => User)
  saveUser: User;

  @Field((type) => String)
  savedAt: string;

  @Field((type) => [ReportoSettingDetail])
  reportSettingDetails: ReportSettingDetail[];
}

@ObjectType('ReportSettingDetail')
export class ReportoSettingDetail {
  @Field((type) => ID)
  reportSettingDetailId: number;

  @Field((type) => Number)
  positionLayerType: number;

  @Field((type) => String)
  positionLayerName: string;

  @Field((type) => Boolean)
  inputFlg: boolean;

  @Field((type) => String)
  theme: string;

  @Field((type) => Number, { nullable: true })
  charaNum: number;
}
