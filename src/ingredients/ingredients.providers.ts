import { Connection } from 'mongoose';
import { IngredientsSchema } from './schema/ingredients.schema';

export const ingredientsProviders = [
  {
    provide: 'INGREDIENTS_MODEL',
    useFactory: (connection: Connection) => connection.model('Ingredients', IngredientsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];