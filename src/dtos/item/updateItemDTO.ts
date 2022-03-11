import { IsDecimal, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateItemDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsDecimal()
  @IsOptional()
  price?: number;
}
