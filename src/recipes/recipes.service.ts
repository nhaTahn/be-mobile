import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Recipes } from './interfaces/recipes.interface';
import { CreateRecipesDto } from './dto/create-recipes.dto';

@Injectable()
export class RecipesService {
  constructor(
    @Inject('RECIPES_MODEL')
    private recipesModel: Model<Recipes>,
  ) {}

  async create(createRecipesDto: CreateRecipesDto): Promise<Recipes> {
    const createdRecipes = new this.recipesModel(createRecipesDto);
    return createdRecipes.save();
  }

  async findAll(): Promise<Recipes[]> {
    return this.recipesModel.find().exec();
  }

  async findById(id: string): Promise<Recipes> {
    try {
      const recipe = await this.recipesModel.findById(id).exec();
      if (!recipe) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }
      return recipe;
    } catch (error) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }

  async getRandomRecipe(): Promise<Recipes> {
    try {
      const recipes = await this.recipesModel.find().exec();
      if (recipes.length === 0) {
        throw new NotFoundException('No recipes found');
      }

      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      return randomRecipe;
    } catch (error) {
      throw new NotFoundException('No recipes found');
    }
  }

  async updateRating(recipeId: string, newRating: number): Promise<Recipes> {
    try {
      const existingRecipe = await this.recipesModel.findById(recipeId).exec();
      if (!existingRecipe) {
        throw new NotFoundException(`Recipe with ID ${recipeId} not found`);
      }

      existingRecipe.rating = newRating;
      const updatedRecipe = await existingRecipe.save();
      return updatedRecipe;
    } catch (error) {
      throw new NotFoundException(`Recipe with ID ${recipeId} not found`);
    }
  }
}
