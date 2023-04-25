import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MultiTermService } from '../infrastructure/multi-term.service';

@Controller()
export class MultiTermController {
  constructor(private readonly mutli: MultiTermService) {}

  @Get()
  call(): Observable<any> {
    return this.mutli.getTest({ termid: 1, userId: 1 });
  }

  // @Get()
  // call(): Observable<any> {
  //   return this.mutli.getSampleData({ take: 2, orderBy: true });
  // }
}
