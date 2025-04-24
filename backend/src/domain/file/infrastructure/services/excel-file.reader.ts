import * as XLSX from 'xlsx';
import { ParsedRowDTO } from '@/domain/file/enterprise/dtos/parsed-row.dto';
import { IFileReader } from '@/domain/file/application/interface/file-reader.interface';

type ExcelRow = string | number | Date | null;
export type ParsedCellValue = string | number | null;

export class ExcelFileReader implements IFileReader {
  async read(file: Buffer): Promise<ParsedRowDTO[]> {
    const workbook = XLSX.read(file, { type: 'buffer', cellDates: true }); // <- cellDates habilitado
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    const raw: ExcelRow[][] = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      defval: null,
    });

    if (raw.length === 0) return [];

    const headerRow: ExcelRow[] = raw[0];

    const headers: string[] = headerRow.map((header, i) => {
      const title = (header || '').toString().trim();
      return title || `UNKNOWN_${i}`;
    });

    const dataRows = raw.slice(1);

    const result: ParsedRowDTO[] = dataRows.map((row) => {
      const item: ParsedRowDTO = {};
      headers.forEach((header, i) => {
        let value = row[i] ?? null;

        // Verificação da coluna DATE
        if (header.trim().toLowerCase() === 'date') {
          if (value instanceof Date) {
            // Formata como yyyy-mm-dd
            value = value.toISOString().split('T')[0];
          } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
            // Já está no formato esperado
          } else if (typeof value === 'number') {
            // Trata como serial do Excel
            value = XLSX.SSF.format('yyyy-mm-dd', value);
          }
        }
        item[header]  = value as string 
      });
      return item;
    });

    return result;
  }
}
