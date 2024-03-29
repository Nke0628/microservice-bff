import { ObjectType, Field, ID, ArgsType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;
}

@ArgsType()
export class FetchUsersByIdsArgs {
  @Field(() => [Number])
  ids: number[];
}
