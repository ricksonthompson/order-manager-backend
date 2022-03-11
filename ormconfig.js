module.exports = {
  type: process.env.DATABASE_CONNECTION || 'mssql',
  host: process.env.DATABASE_HOST || 'db',
  port: parseInt(process.env.DATABASE_PORT) || 1433,
  username: process.env.DATABASE_USER || 'SA',
  password: process.env.DATABASE_PASSWORD || 'Strong@Password123',
  database: '',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/config/database/migrations/*{.ts,.js}'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/config/database/migrations',
  },
};
