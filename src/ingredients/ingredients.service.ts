import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
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
}
