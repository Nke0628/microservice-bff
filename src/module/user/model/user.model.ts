import {
  ObjectType,
  Field,
  ID,
  ArgsType,
  registerEnumType,
} from '@nestjs/graphql';
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

  @Field(() => UserType)
  userType: UserType;

  /** Relation Field  */
  /** 事業部 */
  @Field(() => Department, { nullable: true })
  department: Department;
}

@ArgsType()
export class FetchUsersByIdsArgs {
  @Field(() => [Number])
  ids: number[];

  @Field(() => [UserType])
  userTypeSample: UserType[];
}

/** 社員タイプ */
export const UserType = {
  EMPLOYEE: 1,
  PARTNER: 2,
};

type UserType = (typeof UserType)[keyof typeof UserType];

registerEnumType(UserType, {
  name: 'UserType',
});
