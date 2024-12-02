import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // This sets the base route for this controller
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('hubspot') // This sets the route for the POST request
  async exchangeCode(@Body() body: { code: string }) {
    const { code } = body;
    return this.authService.exchangeCodeForToken(code);
  }
}
