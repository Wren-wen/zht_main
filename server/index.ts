import { app } from "@/router"
import { ENV } from "@/utils/enums"
import { setupDatabase, shutdownDatabase } from "@/models"

const PORT = process.env.PORT || 5556
const NODE_ENV = process.env.NODE_ENV || ENV.DEV

setupDatabase()

process.on('SIGINT', async () => {
    await shutdownDatabase()
    process.exit(0)
})

app.listen(PORT, () => {
    if (NODE_ENV === ENV.DEV)
        console.log('server start')
})