import { ObjectType, Field } from '@nestjs/graphql';
import { BinaryScalar } from './buffer-custom-scalar';

//  csvエクスポート
@ObjectType()
export class CsvExport {
  @Field(() => BinaryScalar)
  csv: Buffer;
}
