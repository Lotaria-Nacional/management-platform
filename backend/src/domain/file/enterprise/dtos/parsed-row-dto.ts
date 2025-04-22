type ParsedCellValue = string | number | null;

export interface ParsedRowDTO {
  [columnName: string]: ParsedCellValue;
}