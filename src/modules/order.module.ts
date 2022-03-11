import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderController from '../controllers/order.controller';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../repositories/order/order.repository';
import { OrderService } from '../services/order.service';
import { ItemModule } from './item.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderRepository]), ItemModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
