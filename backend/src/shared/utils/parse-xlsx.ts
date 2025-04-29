import * as XLSX from "xlsx";

type ParseXlsxInput = {buffer: Buffer} | { path:string };

export function parseXlsx(input: ParseXlsxInput): any[] {

  let workbook: XLSX.WorkBook

  if("buffer" in input){
    workbook = XLSX.read(input.buffer.buffer, { type: "buffer" }); 
  } else {
    workbook = XLSX.readFile(input.path, { type: "file" }); 
  }
  
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  
  console.log(data)
  
  return data;
}
