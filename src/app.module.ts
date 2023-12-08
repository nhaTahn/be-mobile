import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesService } from './recipes/recipes.service';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsService } from './ingredients/ingredients.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, RecipesModule, IngredientsModule, AuthModule],
  controllers: [AppController, RecipesController, AuthController],
  providers: [AppService, RecipesService, IngredientsService],
})
export class AppModule {}
