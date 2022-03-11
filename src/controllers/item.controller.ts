import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import multer, { Multer } from 'multer';
import FileDTO from 'src/dtos/item/file.dto';
import { UpdateItemDTO } from 'src/dtos/item/updateItemDTO';
import { locationToSaveFilesTemporarily } from 'src/utils/Utils';
import CreateItemDTO from '../dtos/item/createItem.dto';
import { Item } from '../entities/item.entity';
import ItemService from '../services/item.service';

@Controller('/api/items')
export default class ItemController {
  constructor(private readonly service: ItemService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() data: CreateItemDTO): Promise<Item> {
    return await this.service.create(data);
  }

  @Post('/files')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.OK)
  async uploadFiles(@UploadedFile('file') file: any) {
    return await this.service.createFromFile(file);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: number): Promise<Item> {
    return await this.service.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMany(): Promise<Item[]> {
    return await this.service.findMany();
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() data: UpdateItemDTO) {
    return await this.service.update(id, data);
  }
}
