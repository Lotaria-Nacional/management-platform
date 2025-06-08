import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

// { name: "id_agent_reference", value: 900040 },
// { name: "id_terminal_reference", value: 10003 },
// data: { name: "id_pos_reference", value: 102704 },

async function main() {}

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
