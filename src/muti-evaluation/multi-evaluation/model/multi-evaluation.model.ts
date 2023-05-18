import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/muti-evaluation/user/model/user.model';

@ObjectType('MultiEvaluation')
export class MultiEvaluation {
  @Field((type) => ID)
  id: number;

  @Field((type) => Number)
  userId: number;

  @Field((type) => User)
  user: User;

  @Field((type) => Number)
  targetUserId: number;

  @Field((type) => User)
  targetUser: User;

  @Field((type) => String)
  multiTermId: string;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  goodComment: string;

  @Field((type) => String)
  improvementComment: string;
}

@InputType()
export class SubmitMultiEvaluationInput {
  @Field((type) => Number)
  userId: number;

  @Field((type) => Number)
  targetUserId: number;

  @Field((type) => Number)
  multiTermId: number;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  goodComment: string;

  @Field((type) => String)
  improvementComment: string;
}

@ArgsType()
export class SearchMyEvaluatingMultiEvaluationsArgs {
  @Field()
  take: number;

  @Field()
  skip: number;
}
