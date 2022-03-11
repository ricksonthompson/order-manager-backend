import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  type: string;

  @Column('int')
  quantity: number;

  @Column('float')
  price: number;

  @ManyToOne(() => Order, (order) => order.items, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  order: Order;
}
