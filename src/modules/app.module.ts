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
      host: process.env.DATABASE_HOST || 'db',
      port: parseInt(process.env.DATABASE_PORT) || 1433,
      username: process.env.DATABASE_USER || 'SA',
      password: process.env.DATABASE_PASSWORD || 'Strong@Password123',
      database: '',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['migrations/*.ts'],
      synchronize: false,
    }),
    ItemModule,
    OrderModule,
  ],
})
export class AppModule {}
