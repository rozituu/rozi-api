
import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LabelFile } from '../entities/labelFile.entity';
import { Rating } from '../entities/rating.entity';
import { UpdateResult } from 'typeorm';
import { CreateRatingDto } from '../dto/labels/create-rating.dto';
import {getConnection} from "typeorm";
import { RatingType } from '../entities/rating-type.entity';


@Injectable()
export class RatingTypesService {
  constructor(@InjectRepository(RatingType) private ratingRepository: Repository<RatingType>) {
  }
   
  async findAll(): Promise<RatingType[]> {
    return this.ratingRepository.find();
  }
 
  async findOne(id: number): Promise<RatingType> {
    return this.ratingRepository.findOne(id);
  }

  async findOrFail(id: number): Promise<RatingType> {
      return this.ratingRepository.findOneOrFail(id);
  }

  async create(rating: Rating) {
    
  }
}