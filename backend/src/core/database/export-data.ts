import fs from "fs";
import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient()

export async function exportPrismaData(){
    const data = await prisma.agent.findMany()
    fs.writeFileSync("agentes.json", JSON.stringify(data, null, 2))
}

exportPrismaData()
    .then(async ()=>{
        await prisma.$disconnect()
        console.log("Dados exportados com sucesso.")
    })
    .catch(async (error)=>{
        console.log(error)
        await prisma.$disconnect()
        process.exit(1)
    })