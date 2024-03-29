import { ArgsType, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/module/user/model/user.model';
import { Fields } from 'src/util/object';

/** 360度評価クエリモデル */
@ObjectType('MultiEvaluationQuery')
export class MultiEvaluationQuery {
  constructor(props: Fields<MultiEvaluationQuery>) {
    Object.assign(this, props);
  }
  /** 評価ID */
  @Field(() => ID)
  id: number;

  /** ユーザID */
  @Field(() => Int)
  userId: number;

  /** ユーザ */
  @Field(() => User)
  user: User;

  /** 対象者ユーザID */
  @Field(() => Int)
  targetUserId: number;

  /** 対象者 */
  @Field(() => User)
  targetUser: User;

  /** 評価期間ID */
  @Field(() => Int)
  multiTermId: number;

  /** 点数 */
  @Field(() => Int)
  score: number;

  /** 良い点 */
  @Field(() => String)
  goodComment: string;

  /** 改善点 */
  @Field(() => String)
  improvementComment: string;

  /** 作成日時 */
  @Field(() => String)
  createdAt: string;

  /** 更新日時 */
  @Field(() => String)
  updatedAt: string;
}

/** IDによる評価検索の引数 */
@ArgsType()
export class FindMyEvaluationByIdArgs {
  /** 評価ID */
  @Field()
  id: number;
}
