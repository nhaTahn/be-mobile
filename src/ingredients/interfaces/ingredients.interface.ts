import { Document } from 'mongoose';

export interface Ingredients extends Document {
  readonly name: string;
  readonly description: string;
}