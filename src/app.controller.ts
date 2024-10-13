import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('public')
  getPublic(): string {
    return this.appService.getPublic();
  }

  @Get('protected')
  @UseGuards(AuthGuard)
  getProtected(): string {
    return this.appService.getProtected();
  }
}
