import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/db.module';
import { LabelFile } from '../entities/labelFile.entity';
import { Rating } from '../entities/rating.entity'
import { labelFilesService } from './labelFile.service';
import { RatingsService } from '../services/rating.service';
import { RatingTypesService } from './ratingtype.service';
import { RatingType } from '../entities/rating-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    LabelFile, Rating, RatingType
  ])],
  providers: [labelFilesService, RatingsService, RatingTypesService],
  exports: [labelFilesService, RatingsService, RatingTypesService],

})
export class ServicesModule { }