import { Item } from '../../entities/item.entity';
import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import CreateItemDTO from '../../dtos/item/createItem.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  createItem(itemProps: CreateItemDTO): Promise<Item> {
    const item = this.create(itemProps);
    return this.save(item);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  findById(id: number): Promise<Item> {
    return this.findOne({ where: { id } });
  }

  findMany(): Promise<Item[]> {
    return this.find();
  }

  updateItem(item: Item): Promise<Item> {
    return this.save(item);
  }
}
