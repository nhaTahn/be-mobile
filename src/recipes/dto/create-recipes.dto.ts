import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class CreateRecipesDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    rating: number;
}