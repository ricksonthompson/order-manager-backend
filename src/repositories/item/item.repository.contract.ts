import CreateItemDTO from '../../dtos/item/createItem.dto';
import { DeleteResult } from 'typeorm';
import { Item } from '../../entities/item.entity';

export default interface IItemRepository {
  create(itemProps: CreateItemDTO): Promise<Item>;
  delete(id: number): Promise<DeleteResult>;
  findOne(id: number): Promise<Item>;
  findMany(): Promise<Item[]>;
  update(item: Item): Promise<Item>;
}
