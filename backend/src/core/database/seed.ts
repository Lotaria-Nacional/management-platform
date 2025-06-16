import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.administration.createMany({
    data:[
      {name: "Maianga", city_id:"684fe94b5748f00ba4476a1b"},
      {name: "Viana", city_id:"684fe94b5748f00ba4476a1b"},
      {name: "Ingombota", city_id:"684fe94b5748f00ba4476a1b"},
      {name: "Hoji-ya-henda", city_id:"684fe94b5748f00ba4476a1b"},
      {name: "Mulenvos",city_id:"684fe94b5748f00ba4476a1b"},
      {name: "Cacuaco", city_id:"684fe94b5748f00ba4476a1b"}
    ]
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