import * as mongoose from 'mongoose';

export const RecipesSchema = new mongoose.Schema({
  name: String,
  rating: { type: Number, default: null },
});