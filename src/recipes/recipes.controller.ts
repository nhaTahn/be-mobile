import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { RecipesService } from './recipes.service';
import { Recipes } from './interfaces/recipes.interface';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('recipes')
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

  @Get('random')
  async getRandomRecipe(): Promise<Recipes> {
    return this.recipesService.getRandomRecipe();
  }

  @Post('/rating')
  async updateRating(
    @Body() updateRatingDto: UpdateRatingDto
  ): Promise<Recipes> {
    return this.recipesService.updateRating(updateRatingDto._id, updateRatingDto.rating);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Recipes> {
    return this.recipesService.findById(id);
  }
}