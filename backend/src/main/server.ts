import { app } from "./app"
import { env } from "./config/env"

const { port } = env

async function startServer(){
    try {
        app.listen(port, ()=>{
            console.log(`App running on port: ${port}`)
        })
    } catch (error) {
        console.error("Error starting server:",error)
    }
}

startServer()