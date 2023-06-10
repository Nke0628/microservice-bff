import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/grpc/grpc-client.module';
import { UserLoader } from './infrastructure/user.loader';
import { UserRepostitory } from './infrastructure/user.repository';
@Module({
  imports: [MyGrpcModule],
  providers: [UserRepostitory, UserLoader],
  exports: [UserRepostitory, UserLoader],
})
export class UserModule {}
