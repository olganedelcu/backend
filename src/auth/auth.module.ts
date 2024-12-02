import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports: [ConfigModule], // Add ConfigModule to imports
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
