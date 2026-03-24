import { Get, Controller, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  getTest() {
    return this.userService.test();
  }

  @Get()
  getAllUsers(): IUser[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('fields') fields: string,
  ): Partial<IUser> {
    const fieldsArray = fields ? fields.split(',') : undefined;

    return this.userService.findOne(id, fieldsArray);
  }
}
