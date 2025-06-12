import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()


async function main() {
  await prisma.city.createMany({
    data: [
      { province_id: "684adfe9dc3abe6b6aa98b3d", name: "Malanje" },
    ]
  })

  console.log("Cidades criadas com sucesso!")
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
