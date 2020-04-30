import { IsEmail, IsNotEmpty, IsInt, IsNumberString, Max, MAX } from 'class-validator';

export class GetLabelsDto {
  skip: number;
  @IsNumberString()
  take:number;
}