import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsDto } from './dto/ingredients.dto';
import { Ingredients } from './interfaces/ingredients.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ingredients')
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

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Ingredients> {
        return this.ingredientsService.findById(id);
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string): Promise<void> {
        return this.ingredientsService.deleteById(id);
    }

    @Delete()
    async deleteAll(): Promise<void> {
        return this.ingredientsService.deleteAll();
    }
}

