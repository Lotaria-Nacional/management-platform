import { app } from "./app"
import { env } from "./config/env"
import { startPrismaConnection } from "@/core/infra/database/prisma/prisma.config"

const { port } = env

async function startServer() {
  try {
    await startPrismaConnection()
    app.listen(port, () => {
      console.log(`App running on port: ${port}`)
    })
  } catch (error) {
    console.error("Error starting server:", error)
  }
}

startServer()
