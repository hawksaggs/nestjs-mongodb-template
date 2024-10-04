import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { UserService } from './user.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../auth/roles.enum';
import { UserDecorator } from '../../common/decorators/user.decorator';

@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.userService.findAll();
  }

  @Get('/profile')
  @Roles(Role.User)
  profile(@UserDecorator() user: any) {
    return user;
  }
}
