import { IsEmail, IsNotEmpty, IsInt, IsNumberString } from 'class-validator';

export class LabelDto {
    @IsNumberString()
    id: number;
}
