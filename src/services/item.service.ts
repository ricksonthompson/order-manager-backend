import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import FileDTO from 'src/dtos/item/file.dto';
import { UpdateItemDTO } from 'src/dtos/item/updateItemDTO';
import CreateItemDTO from '../dtos/item/createItem.dto';
import { Item } from '../entities/item.entity';
import { ItemRepository } from '../repositories/item/item.repository';
import * as stream from 'stream';
import * as readline from 'readline';
import { verifyUploadDirectory } from 'src/utils/Utils';

export default class ItemService {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository,
  ) {
    verifyUploadDirectory();
  }

  async create(itemProps: CreateItemDTO): Promise<Item> {
    if (itemProps.quantity <= 0)
      throw new HttpException(
        'quantity of items not allowed',
        HttpStatus.BAD_REQUEST,
      );

    if (itemProps.price < 0)
      throw new HttpException('price not allowed', HttpStatus.BAD_REQUEST);

    return this.itemRepository.createItem(itemProps);
  }

  async createFromFile(file: FileDTO): Promise<Item> {
    const items: Item[] = [];

    const readableFile = new stream.Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const itemsLines = readline.createInterface({
      input: readableFile,
    });

    for await (const line of itemsLines) {
      const itemLineSplit = line.split('');
      console.log(itemLineSplit);
    }

    return items[0];
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOne(id);

    if (!item) throw new HttpException('item not found', HttpStatus.NOT_FOUND);

    return item;
  }

  async findMany(): Promise<Item[]> {
    return await this.itemRepository.findMany();
  }

  async delete(id: number) {
    const item = await this.itemRepository.findOne(id);

    if (!item) throw new HttpException('item not found', HttpStatus.NOT_FOUND);

    return await this.itemRepository.delete(id);
  }

  async update(id: number, updateProps: UpdateItemDTO): Promise<Item> {
    const item = await this.itemRepository.findOne(id);

    if (!item) throw new HttpException('item not found', HttpStatus.NOT_FOUND);

    if (updateProps.quantity && updateProps.quantity <= 0)
      throw new HttpException(
        'quantity of items not allowed',
        HttpStatus.BAD_REQUEST,
      );

    if (updateProps.price && updateProps.price < 0)
      throw new HttpException('price not allowed', HttpStatus.BAD_REQUEST);

    Object.assign(item, { ...item, ...updateProps });

    return await this.itemRepository.save(item);
  }
}
