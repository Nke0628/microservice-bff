import { ObjectType, Field, ID, ArgsType } from '@nestjs/graphql';
import { Department } from 'src/module/department/model/department.model';

/** Relation Filedを除いた型　*/
// TODO protoから生成される型を利用するのが理想
export type UserBase = Omit<User, 'department'>;

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  departmentId: string;

  /** Relation Field  */
  /** 事業部 */
  @Field(() => Department, { nullable: true })
  department: Department;
}

@ArgsType()
export class FetchUsersByIdsArgs {
  @Field(() => [Number])
  ids: number[];
}
