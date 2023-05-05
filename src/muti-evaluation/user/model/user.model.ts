import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;
}
