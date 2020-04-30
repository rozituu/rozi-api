import { IsEmail, IsNotEmpty, IsInt, IsNumberString, IsString, IsMimeType, Min, Max, IsNumber } from 'class-validator';
import { isString } from 'util';

export class CreateRatingDto {
    @Min(0)
    @Max(10)
    intensity: number;
    //Label file Id
    @IsNumber()
    labelFile: number;
    //Rating type Id
    @IsNumber()
    ratingType: number;
}