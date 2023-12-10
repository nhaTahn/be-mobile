import { ApiProperty } from '@nestjs/swagger';
export class IngredientsDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    description: string;
  }