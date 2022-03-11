import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDTO } from '../dtos/order/createOrder.dto';
import { UpdateOrderDTO } from '../dtos/order/updateOrder.dtos';
import { Item } from '../entities/item.entity';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../repositories/order/order.repository';
import ItemService from './item.service';

export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
    private itemService: ItemService,
  ) {}

  async create(orderProps: CreateOrderDTO): Promise<Order> {
    const items: Item[] = [];

    for (const itemId of orderProps.items) {
      const item = await this.itemService.findOne(itemId);
      items.push(item);
    }

    const order = this.orderRepository.create({ items: items });

    order.totalOrder = items.reduce(
      (reducer, item) => reducer + Number(item.price),
      0,
    );

    return await this.orderRepository.save(order);
  }

  async delete(id: number) {
    const hasOrder = await this.orderRepository.findOne(id);

    if (!hasOrder)
      throw new HttpException('order not found', HttpStatus.NOT_FOUND);

    return await this.orderRepository.delete(id);
  }

  async findOne(id: number): Promise<Order> {
    const orderFound = await this.orderRepository.findOne(id);

    if (!orderFound)
      throw new HttpException('order not found', HttpStatus.NOT_FOUND);

    return orderFound;
  }

  async findMany(): Promise<Order[]> {
    return await this.orderRepository.findMany();
  }

  async update(id: number, updateProps: UpdateOrderDTO) {
    const order = await this.orderRepository.findOne(id);

    if (!order)
      throw new HttpException('order not found', HttpStatus.NOT_FOUND);

    let items: Item[];

    for (const itemId of updateProps.items) {
      items.push(await this.itemService.findOne(itemId));
    }

    order.items = items;
    order.totalOrder = items.reduce(
      (reducer, item) => reducer + Number(item.price),
      0,
    );

    return await this.orderRepository.save(order);
  }
}
