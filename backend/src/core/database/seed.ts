import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.administration.createMany({
    data: [
      {name:"Administração Municipal de Luanda"},
      {name:"Administração Municipal de Belas"},
      {name:"Administração Municipal de Luanda"},
      {name:"Administração Municipal de Cacuaco"},
      {name:"Administração Municipal de Cazenga"},
      {name:"Administração Municipal de Viana"},
      {name:"Administração Municipal de Quiçama"},
      {name:"Administração Municipal de Kilamba-Kiaxi"},
      {name:"Administração Municipal de Ícolo e Bengo"},
      {name:"Administração Municipal de Talatona"},
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("SEED COMPLETED!")
  })
  .catch(async (error) => {
    console.log(error)
    await prisma.$disconnect()
    process.exit(1)
  })
