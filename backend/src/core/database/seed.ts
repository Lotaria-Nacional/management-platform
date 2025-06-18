import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.pos.createMany({
    data:[]
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