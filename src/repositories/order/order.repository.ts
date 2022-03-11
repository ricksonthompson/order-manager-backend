import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Order } from '../../entities/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  // createItem(orderProps: CreateOrderDTO): Promise<Order> {
  //   let orders: Order[]

  //   for(let order of orderProps.items) {
  //     orders
  //   }
  //   return this.manager.save(order);
  // }

  delete(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  findById(id: number): Promise<Order> {
    return this.findOne({ where: { id } });
  }

  findMany(): Promise<Order[]> {
    return this.find();
  }

  updateOrder(order: Order): Promise<Order> {
    return this.save(order);
  }
}
