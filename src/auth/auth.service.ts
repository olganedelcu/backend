import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async exchangeCodeForToken(code: string) {
    const clientId = this.configService.get<string>('HUBSPOT_CLIENT_ID');
    const clientSecret = this.configService.get<string>(
      'HUBSPOT_CLIENT_SECRET',
    );
    const redirectUri = 'http://localhost:3000/callback'; // Ensure this matches your registered redirect URI

    try {
      const response = await axios.post(
        'https://api.hubapi.com/oauth/v1/token',
        null,
        {
          params: {
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            code: code,
          },
        },
      );
      return response.data; // Return the access token data
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw new Error('Error exchanging code for token');
    }
  }
}
