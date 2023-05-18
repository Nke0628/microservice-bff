import { ArgsType, Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/muti-evaluation/user/model/user.model';
import { MultiEvaluation } from './multi-evaluation.model';

@ObjectType('SearchMultiEvaluation')
export class SearchMultiEvaluation {
  @Field((type) => [MultiEvaluation])
  multiEvaluation: MultiEvaluation[];

  @Field((type) => Number)
  totalCount: number;
}
