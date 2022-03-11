import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item.module';
import { OrderModule } from './order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'SA',
      password: 'Strong@Password123',
      database: '',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['migrations/*.ts'],
      synchronize: true,
    }),
    ItemModule,
    OrderModule,
  ],
})
export class AppModule {}
