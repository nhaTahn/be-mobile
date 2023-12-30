
import { Connection } from 'mongoose';
import { AuthSchema } from './schema/auth.schema';

export const authProviders = [
  {
    provide: 'AUTH_MODEL',
    useFactory: (connection: Connection) => connection.model('Auth', AuthSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];