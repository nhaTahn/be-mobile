import { Model } from 'mongoose';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Ingredients } from './interfaces/ingredients.interface';
import { IngredientsDto } from './dto/ingredients.dto';

@Injectable()
export class IngredientsService {
  constructor(
      @Inject('INGREDIENTS_MODEL')
      private ingredientsModel: Model<Ingredients>,
  ) {}
  async create(ingredientsDto: IngredientsDto): Promise<Ingredients> {
      const ingredients = new this.ingredientsModel(ingredientsDto);
      return ingredients.save();
    }
  
  async findAll(): Promise<Ingredients[]> {
  return this.ingredientsModel.find().exec();
  }

  async findById(id: string): Promise<Ingredients> {
    try {
      const ingredients = await this.ingredientsModel.findById(id).exec();
      if (!ingredients) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }
      return ingredients;
    } catch (error) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }
  async deleteById(id: string): Promise<void> {
    try {
      const result = await this.ingredientsModel.findByIdAndDelete(id).exec();
      if(!result) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }    
    }
    catch {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }
  async deleteAll(): Promise<void> {
    try {
      const result = await this.ingredientsModel.deleteMany({})
    }
    catch {
      throw new NotFoundException(`hehehe`);
    }
  }
}
