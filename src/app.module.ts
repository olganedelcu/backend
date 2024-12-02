import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'; // Import AuthModule
import { HubspotController } from './hubspot/hubspot.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'olganedelcu',
      password: process.env.DB_PASSWORD || 'Iopiop12',
      database: process.env.DB_NAME || 'mydatabase',
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    AuthModule, // Import the AuthModule for handling authentication
  ],
  controllers: [HubspotController], // Add your controllers here
  providers: [], // Add any global providers if needed
})
export class AppModule {}
