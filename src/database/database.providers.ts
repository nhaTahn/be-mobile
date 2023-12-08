import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://letmecook:W0zubl3NZ8FYO0Vy@letmecook.omcibs6.mongodb.net/'),
  },
];