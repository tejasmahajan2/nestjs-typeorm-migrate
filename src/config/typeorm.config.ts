import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/entities/user.entity';
config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'test',
    synchronize: false,
    entities: [User],
    // migrations: ['src/database/migrations/*-migration.ts'],
    // entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
    migrationsRun: true,
    // logging: true,
});

export default AppDataSource;