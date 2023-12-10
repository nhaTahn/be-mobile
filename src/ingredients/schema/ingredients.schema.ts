import * as mongoose from 'mongoose';

export const IngredientsSchema = new mongoose.Schema({
  name: String,
  description: String,
});