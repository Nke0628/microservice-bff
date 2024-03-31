import { ObjectType, Field, ArgsType } from '@nestjs/graphql';

//  事業部
@ObjectType()
export class Department {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}

@ArgsType()
export class FetchDepartmentByIdsArgs {
  @Field(() => [String])
  ids: string[];
}
