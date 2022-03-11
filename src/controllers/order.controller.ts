import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDTO } from '../dtos/order/createOrder.dto';
import { UpdateOrderDTO } from '../dtos/order/updateOrder.dtos';
import { Order } from '../entities/order.entity';
import { OrderService } from '../services/order.service';

@Controller('/api/orders/')
export default class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() data: CreateOrderDTO): Promise<Order> {
    return await this.service.create(data);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param() id: number): Promise<Order> {
    return await this.service.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMany(): Promise<Order[]> {
    return await this.service.findMany();
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param() id: number, data: UpdateOrderDTO): Promise<Order> {
    return await this.service.update(id, data);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() id: number) {
    return await this.service.delete(id);
  }
}
