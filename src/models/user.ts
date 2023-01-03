import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  email: { type: String },
  website: { type: String },
}, {
  collection: 'users',
})

export const User = mongoose.model('User', schema);
