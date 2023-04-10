import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MultiTermService } from './multi-term.service';

@Controller()
export class MultiTermController {
  constructor(private readonly mutli: MultiTermService) {}

  @Get()
  call(): Observable<any> {
    return this.mutli.getSampleData({ take: 2, orderBy: true });
  }
}
