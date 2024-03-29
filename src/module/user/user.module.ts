import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/common/grpc/grpc-client.module';
import { UserLoader } from './infrastructure/user.loader';
import { UserRepository } from './infrastructure/user.repository';
import { UserQueryResolver } from './presentation/user.resolvers';
import { UserRepositoryMock } from './infrastructure/user.repository.mock';
import { ConfigService } from '@nestjs/config';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
@Module({
  imports: [MyGrpcModule],
  providers: [
    UserRepository,
    UserLoader,
    UserQueryResolver,
    UserRepositoryMock,
    {
      provide: 'UserRepository',
      useFactory: async (configService: ConfigService, myGrpcService) => {
        return configService.get<string>('MOCK') === 'true'
          ? new UserRepositoryMock()
          : new UserRepository(myGrpcService);
      },
      inject: [ConfigService, MyGrpcService],
    },
  ],
  exports: [UserRepository, UserLoader],
})
export class UserModule {}
