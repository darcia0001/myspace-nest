import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/gg')
export class WelcomeController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
