import { Module } from '@nestjs/common';
import { CsvExportResolver } from './csv-export.resolvers';
import { BinaryScalar } from './buffer-custom-scalar';

@Module({
  imports: [],
  providers: [CsvExportResolver, BinaryScalar],
})
export class CsvExportModule {}
