import mongoose from 'mongoose'

function setupDatabase() {
    const uri = "mongodb://127.0.0.1:27017/main_site"
    mongoose.connect(uri, {
        maxPoolSize: 50,
    })
        .then(() => console.log('mongodb connected...'))
        .catch(err => console.error(err))
}

async function shutdownDatabase() {
    console.log('shutdown database...')
    await mongoose.disconnect()
}

export {
    setupDatabase,
    shutdownDatabase,
}

export * from './news'