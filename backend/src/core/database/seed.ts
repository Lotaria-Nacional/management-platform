import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.administration.create({
    data: {
      name: 12345,
    },
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
