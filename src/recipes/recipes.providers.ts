
import { Connection } from 'mongoose';
import { RecipesSchema } from './schema/recipes.schema';

export const recipesProviders = [
  {
    provide: 'RECIPES_MODEL',
    useFactory: (connection: Connection) => connection.model('Recipes', RecipesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];