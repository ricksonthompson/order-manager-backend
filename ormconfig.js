module.exports = {
  type: process.env.DATABASE_CONNECTION || 'mssql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 1433,
  username: process.env.DATABASE_USER || 'SA',
  password: process.env.DATABASE_PASSWORD || 'Strong@Password123',
  database: '',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['/src/config/database/migrations/*.ts'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/config/database/migrations',
  },
};
