
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LabelFile } from '../entities/labelFile.entity';
import { Rating } from '../entities/rating.entity';

@Injectable()
export class labelFilesService {
  constructor(@InjectRepository(LabelFile) private labelRepository: Repository<LabelFile>) {
  }

  public async save(file: LabelFile): Promise<LabelFile> {
    return this.labelRepository.save(file);
  }

  public async findAndCount(skip: number, take: number) {
    return this.labelRepository.findAndCount({skip, take});
  }
  
  public async findAll(skip:number, take:number) {
    return this.labelRepository.find({skip,take});
  }

  public async findOne(id: number): Promise<LabelFile> {
    return this.labelRepository.findOne(id);
  }
/*
  public async findAllRatingsOfFile(id: number): Promise<any[]> {
    const ratings = this.labelRepository.createQueryBuilder("rating")

    .innerJoin("")
  }
*/
}