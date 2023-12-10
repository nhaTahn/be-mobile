import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class UpdateRatingDto {
    @ApiProperty()
    _id: string;
    @ApiProperty()
    rating: number;
}