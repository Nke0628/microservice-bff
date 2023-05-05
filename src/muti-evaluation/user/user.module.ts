import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/grpc/grpc-client.module';
import { UserRepostitory } from './infrastructure/user.repository';
@Module({
  imports: [MyGrpcModule],
  providers: [UserRepostitory],
  exports: [UserRepostitory],
})
export class UserModule {}
