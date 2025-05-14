import { PrismaClient } from "generated/prisma"

export const prisma = new PrismaClient({
  log: [ "error"],
})

export async function startPrismaConnection() {
  try {
    await prisma.$connect()
    console.log("DATABASE CONNECTED SUCCESSFULY")
  } catch (error) {
    await prisma.$disconnect()
    console.log("ERROR CONNECTING DATABASE: ", error)
    throw error
  }
}
