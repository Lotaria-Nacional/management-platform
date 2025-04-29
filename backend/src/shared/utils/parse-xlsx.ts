import * as XLSX from "xlsx";

type ParseXlsxInput =
  | { path: string }
  | { buffer: Buffer };

export function parseXlsx(input: ParseXlsxInput): any[] {
  let workbook: XLSX.WorkBook;

  if ("buffer" in input) {
    workbook = XLSX.read(input.buffer, { type: "buffer" });
  } else {
    workbook = XLSX.readFile(input.path);
  }
  
  console.log(workbook.Sheets[workbook.SheetNames[0]])

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  
  return data;
}
