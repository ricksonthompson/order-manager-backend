import { DeleteResult } from 'typeorm';
import { CreateOrderDTO } from '../../dtos/order/createOrder.dto';
import { Order } from '../../entities/order.entity';

export default interface IOrderRepository {
  create(itemProps: CreateOrderDTO): Promise<Order>;
  delete(id: number): Promise<DeleteResult>;
  findOne(id: number): Promise<Order>;
  findMany(): Promise<Order[]>;
  update(order: Order): Promise<Order>;
}
