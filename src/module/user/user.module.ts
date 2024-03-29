import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/common/grpc/grpc-client.module';
import { UserLoader } from './infrastructure/user.loader';
import { UserRepostitory } from './infrastructure/user.repository';
import { UserQueryResolver } from './presentation/user-query.resolvers';
@Module({
  imports: [MyGrpcModule],
  providers: [UserRepostitory, UserLoader, UserQueryResolver],
  exports: [UserRepostitory, UserLoader],
})
export class UserModule {}
