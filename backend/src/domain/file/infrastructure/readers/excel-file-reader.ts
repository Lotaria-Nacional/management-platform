import * as XLSX from 'xlsx';
import { ParsedRowDTO } from '@/domain/file/enterprise/dtos/parsed-row-dto';
import { IFileReader } from '@/domain/file/application/interface/file-reader';

type ExcelRow = string | number | null;

export class ExcelFileReader implements IFileReader {
  async read(file: Buffer): Promise<ParsedRowDTO[]> {
    const workbook = XLSX.read(file, { type:"buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw: any[] = XLSX.utils.sheet_to_json<ExcelRow[]>(sheet, { header: 1, defval: null });

    const rowDateHeaders = raw[1] as ExcelRow[];  // linha com datas (em colunas mescladas)
    const rowSubHeaders = raw[2] as ExcelRow[];   // linha com DEBT, DEPOSIT, BALANCE

    let lastValidDate = '';

    const combinedHeaders = rowSubHeaders.map((sub, index) => {
      const maybeDate = rowDateHeaders[index];

      if (maybeDate) {
        lastValidDate = typeof maybeDate === 'string'
          ? maybeDate.trim()
          : XLSX.SSF.format("yyyy-mm-dd", maybeDate);
      }

      const cleanSub = (sub || '').toString().trim();

      if (!lastValidDate && !cleanSub) return `UNKNOWN_${index}`;
      if (!lastValidDate) return cleanSub;
      if (!cleanSub) return lastValidDate;

      return `${lastValidDate}_${cleanSub}`;
    });

    // Linhas com dados começam na linha 3 (índice 3)
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