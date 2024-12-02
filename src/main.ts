import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS to allow cross-origin requests
  await app.listen(4000); // Start the server on port 4000
}
bootstrap();
