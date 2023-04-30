import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;
}

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
