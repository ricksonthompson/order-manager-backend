import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalOrder: number;

  @OneToMany((type) => Item, (item) => item.orders, { cascade: true })
  items: Item[];
}
