import cors from "cors"
import express from "express"
import fileRoutes from "@/domain/file/presentation/routes"

export const server = express()

server.use(express.json())
server.use(cors())

server.use("/file", fileRoutes)

server.listen(8080, ()=> {
    console.log("Server running on port: 8080")
})