import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { RecipesService } from './recipes.service';
import { Recipes } from './interfaces/recipes.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  async create(@Body() createRecipesDto: CreateRecipesDto) {
    return this.recipesService.create(createRecipesDto);
  }

  @Get()
  async findAll(): Promise<Recipes[]> {
    return this.recipesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Recipes> {
    return this.recipesService.findById(id);
  }

  @Get('random')
  async getRandomRecipe(): Promise<Recipes> {
    return this.recipesService.getRandomRecipe();
  }

  @Post(':id/rating')
  async updateRating(
    @Param('id') recipeId: string,
    @Body('rating') newRating: number,
  ): Promise<Recipes> {
    return this.recipesService.updateRating(recipeId, newRating);
  }

}