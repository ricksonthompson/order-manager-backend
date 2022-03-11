import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateOrderDTO {
  @IsNumber()
  @IsNotEmpty()
  items: number[];
}
