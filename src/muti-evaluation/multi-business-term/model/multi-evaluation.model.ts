import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MultiEvaluation {
  @Field((type) => Number)
  userId: number;

  @Field((type) => Number)
  taergetUserId: number;

  @Field((type) => String)
  multiTermId: string;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  comment: string;
}
