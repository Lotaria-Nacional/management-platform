import dotenv from "dotenv"
import express from "express"
import { router } from "./routes"
import { corsConfig } from "./config/cors"
import path from "node:path"

dotenv.config()

const app = express()

app.use(express.static(path.resolve(__dirname, '..','..', 'public' )))

app.use(corsConfig)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api", router)

export { app }