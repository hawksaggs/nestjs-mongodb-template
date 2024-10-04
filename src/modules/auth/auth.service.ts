import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    if (await bcrypt.compare(password, user.password)) {
      const validatedUser = user.toObject();
      delete validatedUser.password;
      return validatedUser;
      // return user;
    }

    return;
  }

  async login(user: any) {
    const payload = {
      username: user.email,
      sub: user._id,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.create(email, password);
    return this.login(user);
  }
}
