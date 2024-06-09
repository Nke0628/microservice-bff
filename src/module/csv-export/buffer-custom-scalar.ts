import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Binary')
export class BinaryScalar implements CustomScalar<string, Buffer> {
  description = 'Binary data';

  // value sent to the client
  serialize(value: Buffer): string {
    return value.toString('base64');
  }

  // value from the client with variables
  parseValue(value: string): Buffer {
    return Buffer.from(value, 'base64');
  }

  // value from the client with literal
  parseLiteral(ast: any): Buffer {
    if (ast.kind === Kind.STRING) {
      return Buffer.from(ast.value, 'base64');
    }
    return null;
  }
}
