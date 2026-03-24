import { Get, Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  getTest() {
    return this.userService.test();
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
}
