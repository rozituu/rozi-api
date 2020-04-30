
import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LabelFile } from '../entities/labelFile.entity';
import { Rating } from '../entities/rating.entity';
import { UpdateResult } from 'typeorm';
import { CreateRatingDto } from '../dto/labels/create-rating.dto';
import {getConnection} from "typeorm";
import { throws } from 'assert';


@Injectable()
export class RatingsService {
  constructor(@InjectRepository(Rating) private ratingRepository: Repository<Rating>) {
  }
   
  async findAll(): Promise<Rating[]> {
    return this.ratingRepository.find();
  }
  async findOne(id: number): Promise<Rating> {
    return this.ratingRepository.findOne(id, {relations: ['labelFile', 'ratingType']});
  }
  async findOrFail(id: number): Promise<Rating> {
      return this.ratingRepository.findOneOrFail(id);
  }
  async save(rating: Rating): Promise<Rating> {
    return this.ratingRepository.save(rating);
  } 
  async findAllRatingsOfFile(): Promise<Rating[]> {
    return this.ratingRepository.find({relations: ['labelFile']});
  }
}