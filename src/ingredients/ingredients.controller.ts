import { Controller, Get, Post, Body } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsDto } from './dto/ingredients.dto';
import { Ingredients } from './interfaces/ingredients.interface';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
    constructor(private readonly ingredientsService: IngredientsService) {}
    
    @Post()
    async create(@Body() ingredientsDto: IngredientsDto) {
        return this.ingredientsService.create(ingredientsDto);
    }
    @Get()
    async findAll(): Promise<Ingredients[]> {
        return this.ingredientsService.findAll();
    }
}

