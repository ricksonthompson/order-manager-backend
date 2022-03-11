import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDTO {
  @IsNumber()
  totalOrder: number;

  @IsNumber()
  @IsNotEmpty()
  items: number[];
}
