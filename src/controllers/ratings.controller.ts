import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Body, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RatingsService } from '../services/rating.service';
import { Rating } from '../entities/rating.entity';
import { CreateRatingDto } from '../dto/labels/create-rating.dto';
import { labelFilesService } from '../services/labelFile.service';
import { RatingTypesService } from '../services/ratingtype.service';

@Controller('ratings')
export class RatingsController {
    constructor(private readonly ratingsService: RatingsService, 
        private readonly labelFilesService: labelFilesService, 
        private readonly ratingsTypeService: RatingTypesService) { }

    @Get()
    async getAllRatings() {
        const ratings = await this.ratingsService.findAll();
        return ratings;
    }

    @Get(':id')
    async getRating(@Param('id') id: number){
       const rating = await this.ratingsService.findOne(id);
       if (!rating) {
           throw new NotFoundException('', 'Rating was not found!');
       }
       return rating;
    }
    @Post()
    async create(@Body() createRatingDto: CreateRatingDto) {
        const labelFile = await this.labelFilesService.findOne(createRatingDto.labelFile);
        if (!labelFile) {
            throw new NotFoundException('', 'labelFile not found.');
        }
        const ratingType = await this.ratingsTypeService.findOrFail(createRatingDto.ratingType);
        const rating = new Rating(createRatingDto.intensity, labelFile, ratingType);
        return await this.ratingsService.save(rating);
    }
}
