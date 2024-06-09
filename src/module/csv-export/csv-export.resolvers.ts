import { Query, Resolver } from '@nestjs/graphql';

import { CsvExport } from './csv-export.model';

@Resolver(() => CsvExport)
export class CsvExportResolver {
  @Query(() => CsvExport, {
    name: 'csvExport',
  })
  async csvExport() {
    return {
      csv: Buffer.from('hoge'),
    };
  }
}
