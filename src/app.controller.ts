import { Controller, Get } from '@nestjs/common';
import { ApiTags,ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('default')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
