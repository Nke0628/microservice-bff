import { Module } from '@nestjs/common';
import { MultiTermRepositoy } from './infrastructure/multi-term.repository';
import { MultiTermResolver } from './controller/multi-term.resolvers';
import { MyGrpcModule } from 'src/grpc/grpc-client.module';

@Module({
  imports: [MyGrpcModule],
  providers: [MultiTermResolver, MultiTermRepositoy],
})
export class MultiTermModule {}
