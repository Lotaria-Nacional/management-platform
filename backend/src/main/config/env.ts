import dotenv from "dotenv"
import { resolve } from "path"

const nodeEnv = process.env.NODE_ENV?.trim() || "development"

dotenv.config({
  path: resolve(process.cwd(), `.env.${nodeEnv}`),
})

export const env = {
  port: Number(process.env.PORT) || 8080,
  database_uri: process.env.DATABASE_URL || "",
}
