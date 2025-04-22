import * as XLSX from 'xlsx';
import { ParsedRowDTO } from '@/domain/file/enterprise/dtos/parsed-row-dto';
import { IFileReader } from '@/domain/file/application/interface/file-reader';

type ExecelRow = string | number | null

export class ExcelFileReader implements IFileReader {
  async read(filePath: string): Promise<ParsedRowDTO[]> {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw:any[] = XLSX.utils.sheet_to_json<ExecelRow[]>(sheet, { header: 1, defval: null });

    // Linhas específicas do seu arquivo
    const rowDateHeaders = raw[1] as ExecelRow[] // linha com as datas
    const rowSubHeaders = raw[2] as ExecelRow[]  // linha com DEBT, DEPOSIT, etc

    const combinedHeaders = rowSubHeaders.map((sub, index) => {
      const date = rowDateHeaders[index];
      const cleanPrefix = typeof date === 'string' ? date.trim() : XLSX.SSF.format("yyyy-mm-dd", date);
      const cleanSub = (sub || '').toString().trim();

      if (!cleanPrefix && !cleanSub) return `UNKNOWN_${index}`;
      if (!cleanPrefix) return cleanSub;
      if (!cleanSub) return cleanPrefix;
      return `${cleanPrefix}_${cleanSub}`;
    });

    // Dados reais começam na linha 3 (índice 3)
    const dataRows = raw.slice(3);

    const result: ParsedRowDTO[] = dataRows.map((row: any[]) => {
      const item: ParsedRowDTO = {};
      row.forEach((cell, i) => {
        item[combinedHeaders[i]] = cell;
      });
      return item;
    });

    return result;
  }
}