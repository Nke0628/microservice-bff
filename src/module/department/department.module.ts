import { Module } from '@nestjs/common';
import { MyGrpcModule } from 'src/common/grpc/grpc-client.module';
import { ConfigService } from '@nestjs/config';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import { DepartmentLoader } from './infrastructure/department.loader';
import { DepartmentResolver } from './presentation/department.resolvers';
import { DepartmentRepositoryMock } from './infrastructure/department.repository.mock';
import { DepartmentRepository } from './infrastructure/department.repository';
@Module({
  imports: [MyGrpcModule],
  providers: [
    DepartmentLoader,
    DepartmentResolver,
    DepartmentRepository,
    DepartmentRepositoryMock,
    {
      provide: 'DepartmentRepository',
      useFactory: async (configService: ConfigService, myGrpcService) => {
        return configService.get<string>('MOCK') === 'true'
          ? new DepartmentRepositoryMock()
          : new DepartmentRepository(myGrpcService);
      },
      inject: [ConfigService, MyGrpcService],
    },
  ],
  exports: [DepartmentRepository, DepartmentRepositoryMock, DepartmentLoader],
})
export class DepartmentModule {}
