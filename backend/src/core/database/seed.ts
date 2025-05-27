import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.city.createMany({
    data: [
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Cacuso",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Caombo",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Calandula",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Cambundi-Catembo",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Cangandala",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Cuaba Nzogo",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Cunda-Dia-Baze",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Luquembo",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Malanje",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Marimba",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Massango",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Mucari",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Quela",
      },
      {
        province_id: "68308efdaf02223900052ee8",
        name: "Quirima",
      },
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
