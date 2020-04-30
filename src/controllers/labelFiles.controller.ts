import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Query, NotFoundException, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LabelDto } from 'src/dto/labels/label.dto';
import { labelFilesService } from '../services/labelFile.service';
import { LabelFile } from '../entities/labelFile.entity';
import { GetLabelsDto } from '../dto/labels/getlabels.dto';

@Controller('labels')
export class LabelFilesController {
  constructor(private readonly labelsService: labelFilesService) {}

  @Get()
  async findAll(@Query() query: GetLabelsDto) {
    return await this.labelsService.findAll(query.skip, query.take);
  }
  
  @Get('/:id')
  findOne(@Param() label: LabelDto) {
   const labelFile = this.labelsService.findOne(label.id);
   if(!labelFile)
   {
     throw  new NotFoundException('', 'Label file was not found!');   }
     return labelFile;
  }
  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file) {
    const labelFile: LabelFile = new LabelFile(file.filename, file.mimetype);
    return this.labelsService.save(labelFile);
  }

}
