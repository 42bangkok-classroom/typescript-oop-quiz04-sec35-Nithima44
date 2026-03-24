import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './user/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
