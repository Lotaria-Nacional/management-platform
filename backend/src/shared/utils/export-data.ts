// scripts/exportData.ts
import { writeFileSync } from 'fs';
import { PrismaClient } from 'generated/prisma';
import { Parser } from 'json2csv'; // apenas se quiser CSV

const prisma = new PrismaClient();

async function exportData() {
  try {
    // Altera 'user' para o nome da tua collection/model
    const data = await prisma.subtype.findMany()

    // Exportar para JSON
    writeFileSync('subtype.json', JSON.stringify(data, null, 2));
    console.log('✅ Dados exportados para data.json');

    // Exportar para CSV (opcional)
    const parser = new Parser();
    const csv = parser.parse(data);
    writeFileSync('subtype.csv', csv);
    console.log('✅ Dados exportados para data.csv');

  } catch (error) {
    console.error('Erro ao exportar os dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportData();
