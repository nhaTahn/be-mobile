import { Document } from 'mongoose';

export interface Auth extends Document {
    username: string;
    password: number;
}