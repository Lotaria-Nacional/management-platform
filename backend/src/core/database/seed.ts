import { PrismaClient } from "generated/prisma"

const prisma = new PrismaClient()

async function main() {
  await prisma.city.createMany({
    data: [
      { name: "Alto Cauale", province_id: "68308efdaf02223900052eeb" },
      { name: "Ambuíla", province_id: "68308efdaf02223900052eeb" },
      { name: "Bembe", province_id: "68308efdaf02223900052eeb" },
      { name: "Buengas", province_id: "68308efdaf02223900052eeb" },
      { name: "Damba", province_id: "68308efdaf02223900052eeb" },
      { name: "Macondo", province_id: "68308efdaf02223900052eeb" },
      { name: "Maquela do Zombo", province_id: "68308efdaf02223900052eeb" },
      { name: "Mucaba", province_id: "68308efdaf02223900052eeb" },
      { name: "Negage", province_id: "68308efdaf02223900052eeb" },
      { name: "Puri", province_id: "68308efdaf02223900052eeb" },
      { name: "Quimbele", province_id: "68308efdaf02223900052eeb" },
      { name: "Sanza Pombo", province_id: "68308efdaf02223900052eeb" },
      { name: "Uíge", province_id: "68308efdaf02223900052eeb" },

      { name: "Cuimba", province_id: "68308efdaf02223900052eec" },
      { name: "M’Banza Congo", province_id: "68308efdaf02223900052eec" },
      { name: "Noqui", province_id: "68308efdaf02223900052eec" },
      { name: "Nóqui", province_id: "68308efdaf02223900052eec" },
      { name: "Nzeto", province_id: "68308efdaf02223900052eec" },
      { name: "Tomboco", province_id: "68308efdaf02223900052eec" },
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
