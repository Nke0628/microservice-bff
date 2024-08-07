import { Query, Resolver } from '@nestjs/graphql';

import { CsvExport } from './csv-export.model';

@Resolver(() => CsvExport)
export class CsvExportResolver {
  @Query(() => CsvExport, {
    name: 'csvExport',
  })
  async csvExport() {
    function generateCSVData(numRows, numCols) {
      const rows = [];
      // ヘッダー
      const headers = ['社員ID', '氏名', '事業部', '部署', 'チーム', '役職'];
      rows.push(headers.join(','));
      // データ行の生成
      for (let i = 0; i < numRows; i++) {
        const data = [];
        for (let j = 0; j < numCols; j++) {
          data.push(Math.floor(Math.random() * 1000)); // ランダムな数値データ
        }
        rows.push(data.join(','));
      }
      return rows.join('\n');
    }
    const csvData = generateCSVData(10000, 10);
    return {
      csv: Buffer.from(csvData),
    };
  }
}
