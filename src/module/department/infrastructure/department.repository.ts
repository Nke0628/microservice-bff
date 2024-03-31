import { Injectable } from '@nestjs/common';
import { MyGrpcService } from 'src/common/grpc/grpc-client.service';
import { IDepartmentRepository } from './department.repository.interface';
import { Department } from '../model/department.model';

@Injectable()
export class DepartmentRepository implements IDepartmentRepository {
  constructor(private readonly myGrpcService: MyGrpcService) {}
  fetchDepartmentByIds(departmentIds: string[]): Promise<Department[]> {
    throw new Error('Method not implemented.');
  }
}
