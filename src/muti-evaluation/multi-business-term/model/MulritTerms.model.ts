import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MulritTerms {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  businessTermName: string;

  @Field((type) => String)
  businessTermStartDate: string;

  @Field((type) => String)
  businessTermEndDate: string;

  @Field((type) => String)
  multiTermStartDate: string;

  @Field((type) => String)
  multiTermEndDate: string;

  @Field((type) => Boolean)
  isCurrentTerm: boolean;
}
