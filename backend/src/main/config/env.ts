import dotenv from 'dotenv'

dotenv.config()

export const env = {
    port: process.env.PORT || 3333,
    database_uri:process.env.DATABASE_URL || ""
}