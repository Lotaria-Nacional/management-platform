import dotenv from "dotenv"
import express from "express"
import { router } from "./routes"
import { corsConfig } from "./config/cors"

dotenv.config()

const app = express()

app.use(corsConfig)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api", router)

export { app }