import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GraphQLError } from 'graphql';

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    throw new GraphQLError(exception.message, {
      extensions: {
        errorDetail: exception.details,
      },
    });
  }
}
