import * as dotenv from 'dotenv'

dotenv.config()

import mongoose, { Model } from 'mongoose'
import * as path from 'path'

export const resetCollection = async <T>(model: Model<T>) => {
  const collectionName = model.collection.name
  return mongoose.connection.collection(collectionName).deleteMany({}).catch(console.error)
}

export const setup = () => {
  beforeAll(async () => {
    mongoose.set('strictQuery', false)
    const testName = path.basename(expect.getState().testPath).split('.').at(0)
    await mongoose.connect(`mongodb://localhost:27017/ts_mongoose_jest_example_test_${testName}`)
  })
}

export const teardown = () => {
  afterAll(async () => {
    await mongoose.connection.close()
  })
}
