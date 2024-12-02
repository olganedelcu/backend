import { Controller, Get } from '@nestjs/common';

@Controller('hubspot')
export class HubspotController {
  @Get()
  getHubspotData() {
    // Implement your logic to get data from HubSpot
    return { message: 'HubSpot data endpoint' };
  }
}
