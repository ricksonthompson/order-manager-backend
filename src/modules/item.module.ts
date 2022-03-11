import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ItemController from '../controllers/item.controller';
import { Item } from '../entities/item.entity';
import { ItemRepository } from '../repositories/item/item.repository';
import ItemService from '../services/item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemRepository])],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
