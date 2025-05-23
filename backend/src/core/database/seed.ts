import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient()

async function main(){
    await prisma.subtype.createMany({
        data:[
        { name: "Bancada", type_id:"68309276fc18416fa0f19186" },
        { name: "Roulote" , type_id:"68309276fc18416fa0f19186" },
        ]
    })
}

main()
    .then(async ()=>{
        await prisma.$disconnect()
        console.log("SEED COMPLETED!")
    }).catch(async(error)=>{
        console.log(error)
        await prisma.$disconnect()
        process.exit(1)
    })