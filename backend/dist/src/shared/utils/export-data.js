"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/exportData.ts
const fs_1 = require("fs");
const prisma_1 = require("generated/prisma");
const json2csv_1 = require("json2csv"); // apenas se quiser CSV
const prisma = new prisma_1.PrismaClient();
async function exportData() {
    try {
        // Altera 'user' para o nome da tua collection/model
        const data = await prisma.subtype.findMany();
        // Exportar para JSON
        (0, fs_1.writeFileSync)('subtype.json', JSON.stringify(data, null, 2));
        console.log('✅ Dados exportados para data.json');
        // Exportar para CSV (opcional)
        const parser = new json2csv_1.Parser();
        const csv = parser.parse(data);
        (0, fs_1.writeFileSync)('subtype.csv', csv);
        console.log('✅ Dados exportados para data.csv');
    }
    catch (error) {
        console.error('Erro ao exportar os dados:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
exportData();
//# sourceMappingURL=export-data.js.map