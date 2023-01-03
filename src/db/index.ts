import mongoose from 'mongoose'
import * as config from '../config'

export const setup = async () => {
  await mongoose.connect(config.mongoDbConnectionString);
}
