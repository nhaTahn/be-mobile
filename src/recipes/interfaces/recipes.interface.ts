import { Document } from 'mongoose';

export interface Recipes extends Document {
    name: string;
    rating: number;
}